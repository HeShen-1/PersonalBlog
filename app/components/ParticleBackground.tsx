'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const particles: Array<{
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            opacity: number
        }> = []

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createParticle = () => {
            return {
                x: Math.random() * canvas.width,
                y: canvas.height + 10,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: -Math.random() * 2 - 1,
                opacity: Math.random() * 0.5 + 0.1
            }
        }

        // 初始化粒子
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle())
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle, index) => {
                particle.x += particle.speedX
                particle.y += particle.speedY

                // 重置粒子位置
                if (particle.y < -10) {
                    particles[index] = createParticle()
                }

                // 绘制粒子
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }

        resizeCanvas()
        animate()

        window.addEventListener('resize', resizeCanvas)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.3 }}
        />
    )
} 