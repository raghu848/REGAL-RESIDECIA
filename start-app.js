#!/usr/bin/env node

// Script to start both server and client for development
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Regal Residencia Application...');
console.log('==========================================\n');

// Start the server
console.log('🖥️  Starting server...');
const server = spawn('node', ['server.js'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: true
});

server.on('spawn', () => {
  console.log('✅ Server started successfully!\n');
});

server.on('error', (err) => {
  console.log('❌ Error starting server:', err.message);
});

server.on('close', (code) => {
  console.log('🖥️  Server process exited with code ' + code);
});

// Wait a moment for server to start, then start client
setTimeout(() => {
  console.log('💻 Starting client...');
  const client = spawn('npm', ['start'], {
    cwd: path.join(process.cwd(), 'client'),
    stdio: 'inherit',
    shell: true
  });

  client.on('spawn', () => {
    console.log('✅ Client started successfully!\n');
  });

  client.on('error', (err) => {
    console.log('❌ Error starting client:', err.message);
  });

  client.on('close', (code) => {
    console.log('💻 Client process exited with code ' + code);
  });
}, 3000);

console.log('✅ Development environment is starting up!');
console.log('   Server: http://localhost:5000');
console.log('   Client: http://localhost:3000\n');
console.log('🔄 Both processes are running. Press Ctrl+C to stop.\n');

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development environment...');
  if (server) server.kill();
  // Note: We can't easily kill the client process this way
  process.exit(0);
});