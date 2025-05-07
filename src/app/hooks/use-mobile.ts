"use client"

import { useState, useEffect } from "react"

/**
 * A hook that detects if the current device is a mobile device based on screen width
 * @param breakpoint The width threshold to consider a device as mobile (default: 768px)
 * @returns A boolean indicating if the current device is a mobile device
 */
export function useMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    // Function to check if the device is mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Check on initial render
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [breakpoint])

  return isMobile
}

export default useMobile
