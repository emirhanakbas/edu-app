import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Edu App Backend is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/api/tech-stack', (req, res) => {
  res.json({
    frontend: {
      framework: 'React',
      language: 'TypeScript',
      bundler: 'Vite',
      styling: 'CSS Modules'
    },
    backend: {
      runtime: 'Node.js',
      framework: 'Express.js',
      language: 'TypeScript'
    },
    tools: {
      packageManager: 'npm',
      linting: 'ESLint',
      testing: 'Jest'
    }
  });
});

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path 
  });
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 Edu App Backend - Programming Language: TypeScript + Node.js`);
});

export default app;