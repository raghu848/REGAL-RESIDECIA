#!/usr/bin/env node

// Script to start both server and client for development
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Regal Residencia Development Environment...');
console.log('=====================================================\n');

// Start the server
const server = spawn('node', ['server.js'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: true
});

console.log('🖥️  Server process started...\n');

// Start the client with a specific port
const client = spawn('powershell', ['-Command', '$env:PORT=3006; npm start'], {
  cwd: path.join(process.cwd(), 'client'),
  stdio: 'inherit',
  shell: true
});

console.log('💻 Client process started...\n');

console.log('✅ Development environment is starting up!');
console.log('   Server: http://localhost:5005');
console.log('   Client: http://localhost:3006\n');
console.log('🔄 Both processes are running in the background.');
console.log('   Press Ctrl+C to stop both processes.\n');

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development environment...');
  server.kill();
  client.kill();
  process.exit(0);
});