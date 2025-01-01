"use client"
import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { SvgNodeProps } from './elements/SvgNode'
import Image from 'next/image'
import { SvgInput } from './elements/SvgInput'
import { SvgOutputs } from './elements/SvgOutputs'
import { SvgBlueIndicator } from './elements/SvgBlueIndicator'
import { SvgPinkIndicator } from './elements/SvgPinkIndicator'


gsap.registerPlugin(MotionPathPlugin)
// Define the paths on the input side of the diagram
const inputPaths = [
  'M843.505 284.659L752.638 284.659C718.596 284.659 684.866 280.049 653.251 271.077L598.822 255.629L0.675021 1.00011',
  'M843.505 298.181L724.342 297.36C708.881 297.36 693.45 296.409 678.22 294.518L598.822 284.659C592.82 284.659 200.538 190.002 0.675028 164.892',
  'M843.505 311.703L701.108 310.061L598.822 305.136L0.675049 256.071',
  'M843.505 325.224L598.822 326.002L0.675049 321.858',
  'M843.505 338.746L701.108 340.388L598.822 345.442L0.675038 387.646',
  'M843.505 352.268L724.342 353.088C708.881 353.088 693.45 354.039 678.22 355.93L598.822 365.789L0.675067 478.825',
  'M843.505 365.789L752.638 365.789C718.596 365.789 684.866 370.399 653.251 379.372L598.822 394.82L0.675049 642.717',
]
const inputFileSets = [
  [
    { label: '.jsx' },
    { label: '.sass' },
    { label: '.svelte', color: '#ff8d67' },
  ],
  [{ label: '.tsx' }, { label: '.scss' }, { label: '.vue', color: '#40b782' }],
  [
    { label: '.js' },
    { label: '.styl' },
    { label: '.svelte', color: '#ff8d67' },
  ],
  [{ label: '.ts' }, { label: '.less' }, { label: '.vue', color: '#40b782' }],
  [{ label: '.mts' }, { label: '.html' }, { label: '.json' }],
]
export const HeroDiagram = () => {
  // States for animation control
  const [blueIndicator, setBlueIndicator] = useState(false)
  const [pinkIndicator, setPinkIndicator] = useState(false)
  const [illuminateLogo, setIlluminateLogo] = useState(false)
  const [isChromiumBrowser, setIsChromiumBrowser] = useState(true)
  const [isUwu, setIsUwu] = useState(true)

  // States for lines
  const [inputLines, setInputLines] = useState(
    inputPaths.map((path) => ({
      position: 0,
      visible: false,
      labelVisible: false,
      label: '',
      glowColor: '#41D1FF',
      dotColor: '#9fe6fd',
      path,
    }))
  )
  const updateInputLine = (index: number, updates: SvgNodeProps) => {
    setInputLines(prevLines =>
      prevLines.map((line, i) =>
        i === index ? { ...line, ...updates } : line
      )
    )
  }
  const [outputLines] = useState([
    {
      position: 0,
      visible: false,
      labelVisible: false,
      label: '.html',
    },
    {
      position: 0,
      visible: false,
      labelVisible: false,
      label: '.css',
    },
    {
      position: 0,
      visible: false,
      labelVisible: false,
      label: '.js',
    },
  ])
  // Animation functions
  const animateSingleInputDesktop = (inputLine: SvgNodeProps, index: number) => {
    const timeline = gsap.timeline()

    timeline.set(inputLine, { position: 0 }, 0)
    timeline.to(inputLine, {
      position: Math.random() * 0.1 + 0.4,
      duration: 1,
      ease: 'expo.out',
      onUpdate: () => updateInputLine(index, { position: inputLine.position })
    }, 0)
    timeline.set(inputLine,
      {
        visible: true,
        onUpdate: () => updateInputLine(index, { visible: true })
      }, 0)
    timeline.set(inputLine, { labelVisible: true, onUpdate: () => updateInputLine(index, { labelVisible: true }) }, 0.2)
    timeline.to(inputLine, {
      position: 1,
      duration: 1.2,
      ease: 'power3.in',
      onUpdate: () => updateInputLine(index, { position: inputLine.position })
    }, 1.2)
    timeline.set(inputLine, { labelVisible: false, onUpdate: () => updateInputLine(index, { labelVisible: false }) }, 1.6)
    timeline.set(inputLine, { visible: false, onUpdate: () => updateInputLine(index, { visible: false }) }, 1.9)
    
    return timeline
  }
  const animateSingleInputMobile = (inputLine: SvgNodeProps) => {
    const timeline = gsap.timeline()

    timeline.set(inputLine, { position: 0 }, 0)
    timeline.to(inputLine, {
      position: 1,
      duration: 1.8,
      ease: 'power2.out',
    }, 0)
    timeline.set(inputLine, { visible: true }, 0)
    timeline.set(inputLine, { visible: false }, 0.5)

    return timeline
  }
  const prepareInputs = () => {
    const inputFileSet =
      inputFileSets[Math.floor(Math.random() * inputFileSets.length)]

    const inputLineIndexes = new Set()
    while (inputLineIndexes.size < 3) {
      inputLineIndexes.add(Math.floor(Math.random() * inputLines.length))
    }

    const inputs = [...inputLineIndexes]
    const newInputLines = [...inputLines]
    inputs.forEach((lineIndex, fileIndex) => {
      newInputLines[lineIndex as number] = {
        ...newInputLines[lineIndex as number],
        label: inputFileSet[fileIndex].label,
        dotColor: inputFileSet[fileIndex].color || "#9fe6fd",
        glowColor: inputFileSet[fileIndex].color || "#41D1FF",
      }
    })
    setInputLines(newInputLines)
    return inputs
  }
  const animateSingleOutputDesktop = (outputLine: SvgNodeProps, index: number) => {
    const timeline = gsap.timeline()

    timeline.set(outputLine, { position: 0 }, 0)
    timeline.to(outputLine, {
      position: (0.7 / 3) * (index + 1) + 0.05,
      duration: 1.5,
      ease: 'expo.out',
    }, 0)
    timeline.set(outputLine, { visible: true }, 0)
    timeline.set(outputLine, { labelVisible: true }, 0.4)
    timeline.to(outputLine, {
      position: 1,
      duration: 1.5,
      ease: 'power3.in',
    }, 2)
    timeline.set(outputLine, { labelVisible: false }, 2.5)
    timeline.set(outputLine, { visible: false }, 3)

    return timeline
  }
  const animateSingleOutputMobile = (outputLine: SvgNodeProps) => {
    const timeline = gsap.timeline()

    timeline.set(outputLine, { position: 0 }, 0)
    timeline.to(outputLine, {
      position: 0.7,
      duration: 2,
      ease: 'power1.inOut',
    }, 0.3)
    timeline.set(outputLine, { visible: true }, 0.75)
    timeline.set(outputLine, { visible: false }, 1.2)

    return timeline
  }
  const animateDiagram = () => {
    const isMobile = window.innerWidth < 768
    const timeline = gsap.timeline({
      onComplete: animateDiagram
    })
    prepareInputs().forEach((lineIndex, fileIndex) => {
      timeline.add(
        isMobile
          ? animateSingleInputMobile(inputLines[lineIndex as number])
          : animateSingleInputDesktop(inputLines[lineIndex as number], lineIndex as number),
        fileIndex * (isMobile ? 0.4 : 0.2)
      )
    })

    timeline.set(() => setBlueIndicator(true), {}, isMobile ? '>-2' : '>-0.2')
    timeline.set(() => setIlluminateLogo(true), {}, '<-0.3')
    timeline.set(() => setPinkIndicator(true), {}, '<+0.3')


    timeline.addLabel('showOutput', '<')
    outputLines.forEach((outputLine, index) => {
      timeline.add(
        isMobile
          ? animateSingleOutputMobile(outputLine)
          : animateSingleOutputDesktop(outputLine, index),
        'showOutput+=' + (isMobile ? 0.3 : 0.1) * index
      )
    })

    if (!isMobile) {
      timeline.set(() => setBlueIndicator(false), {}, '>-1')
      timeline.set(() => setPinkIndicator(false), {}, '<')
      timeline.set({}, {}, '+=0.2')
    }
  }
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    setIsChromiumBrowser('chrome' in window)
    setIsUwu(window.location.search.includes('?uwu'))

    const scrollTrigger = ScrollTrigger.create({
      trigger: '#hero-diagram',
      start: 'center 100%',
      once: true,
      onEnter: () => {
        animateDiagram()
      },
    })
    return () => {
      scrollTrigger.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="hero__diagram" id="hero-diagram">
      <SvgInput inputLines={inputLines} />
      <SvgOutputs outputLines={outputLines} />
      <SvgBlueIndicator active={blueIndicator} />
      <SvgPinkIndicator active={pinkIndicator} />

      <div className={`vite-chip ${illuminateLogo && "active"}`}>
        <div className={"vite-chip__background"}>
          <div className={"vite-chip__border"} />
          <div
            className={`vite-chip__edge ${isChromiumBrowser && "edge--animated"}`}
          />
        </div>
        <div className={"vite-chip__filter"} />
        <Image
          src={isUwu ? 'https://vite.dev/logo-uwu.png' : 'https://vite.dev/logo.svg'}
          alt={isUwu ? 'Vite Kawaii Logo by @icarusgkx' : 'Vite Logo'}
          width={65}
          height={65}
          className={`vite-chip__logo ${isUwu && "uwu"}`}
        />
      </div>

      <div className={`hero__background ${illuminateLogo && "active"}`} />
    </div>
  )
}
