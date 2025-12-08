'use client'

import { MotionConfig } from "framer-motion"

export default function({ children }) {
    return (
        <MotionConfig reducedMotion="user">
            {children}
        </MotionConfig>
    )
}