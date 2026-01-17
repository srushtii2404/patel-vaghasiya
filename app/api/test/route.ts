import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST() {
    try {
        // Test contact form submission
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: 'Test',
                lastName: 'User',
                email: 'test@example.com',
                phone: '1234567890',
                service: 'tax-advisory',
                message: 'This is a test submission from API test endpoint'
            })
        });

        const result = await response.json();

        return NextResponse.json({
            message: 'Contact form test completed',
            contactApiResponse: result,
            contactApiStatus: response.status,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json({
            message: 'Contact form test failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString()
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        // Test file system operations
        const dataDir = path.join(process.cwd(), 'data');
        const testFile = path.join(dataDir, 'test.json');

        // Create data directory if it doesn't exist
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Write test data
        const testData = {
            message: 'File system test successful',
            timestamp: new Date().toISOString()
        };

        fs.writeFileSync(testFile, JSON.stringify(testData, null, 2));

        // Read it back
        const readData = JSON.parse(fs.readFileSync(testFile, 'utf-8'));

        return NextResponse.json({
            message: 'API and file system are working!',
            timestamp: new Date().toISOString(),
            fileSystemTest: 'PASSED',
            dataWritten: testData,
            dataRead: readData,
            dataDirectory: dataDir,
            environment: {
                EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
                EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set',
                NODE_ENV: process.env.NODE_ENV
            }
        });
    } catch (error) {
        return NextResponse.json({
            message: 'File system test failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString()
        }, { status: 500 });
    }
}