import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const submissionsFile = path.join(process.cwd(), 'data', 'contact-submissions.json');

        if (!fs.existsSync(submissionsFile)) {
            return NextResponse.json({
                message: 'No contact submissions yet',
                submissions: [],
                total: 0
            });
        }

        const fileContent = fs.readFileSync(submissionsFile, 'utf-8');
        const submissions = JSON.parse(fileContent);

        return NextResponse.json({
            message: 'Contact submissions retrieved successfully',
            submissions: submissions,
            total: submissions.length,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to retrieve submissions',
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString()
        }, { status: 500 });
    }
}





