'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'

export default function Home() {
    return (
        <div className="relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <BlogPreview />
            <Contact />
        </div>
    )
} 