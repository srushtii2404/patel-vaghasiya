import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, service, message } = body;

        // Validation
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: firstName, lastName, email, message' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        console.log('Contact form submission:', { firstName, lastName, email, phone, service, message });
        console.log('Processing contact form submission...');

        // Save form data to a JSON file for now
        const submission = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            firstName,
            lastName,
            email,
            phone,
            service,
            message,
            ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
        };

        // Ensure the data directory exists
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Save to submissions.json file
        const submissionsFile = path.join(dataDir, 'contact-submissions.json');

        let submissions = [];
        try {
            if (fs.existsSync(submissionsFile)) {
                const fileContent = fs.readFileSync(submissionsFile, 'utf-8');
                submissions = JSON.parse(fileContent);
            }
        } catch (error) {
            console.log('Creating new submissions file');
        }

        submissions.push(submission);
        fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));

        console.log('Contact form data saved successfully to file');
        console.log('Submission ID:', submission.id);

        return NextResponse.json(
            { message: 'Message sent successfully! We\'ll get back to you soon.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        return NextResponse.json(
            { error: 'Failed to process message. Please try again later.' },
            { status: 500 }
        );
    }
}