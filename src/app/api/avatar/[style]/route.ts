import { createAvatar } from '@dicebear/core';
import * as collection from '@dicebear/collection';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ style: string }> }
) {
    const { style } = await params;
    const searchParams = request.nextUrl.searchParams;

    const seed = searchParams.get('seed') || 'random';
    const backgroundColor = searchParams.get('backgroundColor');

    // Map style name to collection object
    // DiceBear styles in the library are camelCase (e.g., adventurerNeutral)
    // while the API uses kebab-case (e.g., adventurer-neutral)
    const styleKey = style.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

    const schema = (collection as any)[styleKey];

    if (!schema) {
        console.error(`Style "${style}" (mapped to "${styleKey}") not found in collection`);
        return new NextResponse('Style not found', { status: 404 });
    }

    try {
        const avatar = createAvatar(schema, {
            seed,
            backgroundColor: backgroundColor ? [backgroundColor] : undefined,
        });

        const svg = avatar.toString();

        return new NextResponse(svg, {
            headers: {
                'Content-Type': 'image/svg+xml',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error generating avatar:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
