'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Person {
    id: string;
    name: string;
    designation: string;
    description: string;
    picture: string;
    email: string;
    isLead: boolean;
}

interface Node extends d3.SimulationNodeDatum {
    id: string;
    person: Person;
    isLead: boolean;
}

interface Link extends d3.SimulationLinkDatum<Node> {
    source: string | Node;
    target: string | Node;
}

interface ForceNetworkGraphProps {
    people: Person[];
    onPersonClick: (person: Person) => void;
    width?: number;
    height?: number;
}

export default function ForceNetworkGraph({
    people,
    onPersonClick,
    width = 800,
    height = 600
}: ForceNetworkGraphProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current || people.length === 0) return;

        // Clear previous content
        d3.select(svgRef.current).selectAll('*').remove();

        const svg = d3.select(svgRef.current);

        // Create nodes from people data
        const nodes: Node[] = people.map(person => ({
            id: person.id,
            person,
            isLead: person.isLead,
            x: width / 2,
            y: height / 2
        }));

        // Create links - connect leader to all other members
        const leader = nodes.find(node => node.isLead);
        const links: Link[] = leader ?
            nodes
                .filter(node => !node.isLead)
                .map(node => ({
                    source: leader.id,
                    target: node.id
                }))
            : [];

        // Create force simulation
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink<Node, Link>(links).id(d => d.id).distance(200))
            .force('charge', d3.forceManyBody().strength(-800))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(60));

        // Create container group
        const container = svg.append('g');

        // Add zoom behavior (disabled panning, only scaling)
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([1.15, 2])
            .filter((event) => {
                // Disable zoom and pan
                return event.type === '';
            })
            .on('zoom', (event) => {
                container.attr('transform', event.transform);
            });

        svg.call(zoom);

        // Create links
        const linkElements = container
            .selectAll('.link')
            .data(links)
            .enter()
            .append('line')
            .attr('class', 'link')
            .attr('stroke', '#d1d5db')
            .attr('stroke-width', 2)
            .attr('stroke-opacity', 0.6);

        // Create node groups
        const nodeGroups = container
            .selectAll('.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .style('cursor', 'pointer')
            .call(d3.drag<SVGGElement, Node>()
                .on('start', (event, d) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on('drag', (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on('end', (event, d) => {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                })
            );

        // Add circles for profile pictures (background)
        nodeGroups
            .append('circle')
            .attr('r', d => d.isLead ? 50 : 35)
            .attr('fill', 'white')
            .attr('stroke', d => d.isLead ? '#16a34a' : '#d1d5db')
            .attr('stroke-width', d => d.isLead ? 4 : 2);

        // Add profile pictures using foreignObject
        nodeGroups
            .append('foreignObject')
            .attr('x', d => d.isLead ? -45 : -30)
            .attr('y', d => d.isLead ? -45 : -30)
            .attr('width', d => d.isLead ? 90 : 60)
            .attr('height', d => d.isLead ? 90 : 60)
            .append('xhtml:div')
            .style('width', '100%')
            .style('height', '100%')
            .style('border-radius', '50%')
            .style('overflow', 'hidden')
            .style('background-size', 'cover')
            .style('background-position', 'center')
            .style('background-image', d => `url(${d.person.picture})`);

        // Add name labels
        nodeGroups
            .append('text')
            .attr('dy', d => d.isLead ? 65 : 50)
            .attr('text-anchor', 'middle')
            .style('font-size', d => d.isLead ? '14px' : '12px')
            .style('font-weight', d => d.isLead ? 'bold' : 'normal')
            .style('fill', '#111827')
            .text(d => d.person.name);

        // Add click handlers
        nodeGroups.on('click', (event, d) => {
            onPersonClick(d.person);
        });

        // Update positions on simulation tick
        simulation.on('tick', () => {
            linkElements
                .attr('x1', d => (d.source as Node).x!)
                .attr('y1', d => (d.source as Node).y!)
                .attr('x2', d => (d.target as Node).x!)
                .attr('y2', d => (d.target as Node).y!);

            nodeGroups
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });

        // Cleanup function
        return () => {
            simulation.stop();
        };
    }, [people, onPersonClick, width, height]);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <svg
                ref={svgRef}
                width={width}
                height={height}
                className="border border-gray-200 rounded-lg shadow-sm"
                style={{ background: 'linear-gradient(to bottom, #f9fafb, #ffffff)' }}
            />
        </div>
    );
}
