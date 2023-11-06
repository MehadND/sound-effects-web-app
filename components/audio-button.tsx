"use client";
import React from 'react'
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Slider } from './ui/slider';

const AudioButton = () => {
    const { load, volume, setVolume } = useGlobalAudioPlayer();

    const volumeIncrement = 0.1; // Set your desired volume increment (e.g., 0.1 for a 10% change)

    function playSound() {
        load('/CLICK_001.wav', {
            autoplay: true,
            initialVolume: volume,
        });
    }

    function increaseVolume() {
        if (volume < 1.0) {
            setVolume(volume + volumeIncrement);
        }
    }

    function decreaseVolume() {
        if (volume > 0) {
            setVolume(Math.max(0, volume - volumeIncrement));
        }
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            {/* UI Grid */}
            <Card className='border-black'>
                <CardHeader>
                    <CardTitle>Sound Effect Web App</CardTitle>
                    <CardDescription className=' border-b-2 border-b-black italic'>Volume: {volume}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className='w-full' onClick={() => playSound()}>Play Sound</Button>
                </CardContent>
                <CardFooter className='flex justify-evenly'>
                    <Button variant={'outline'} className='border-black' onClick={() => increaseVolume()}>+</Button>
                    <Button variant={'outline'} className='border-black' onClick={() => decreaseVolume()}>-</Button>
                </CardFooter>
            </Card>

        </div>
    );
}


// <div className='flex justify-center'>
//                 <Button variant={'default'} className='w-full' onClick={() => playSound()}>Play Sound</Button>

//             </div>
//             <div className='flex justify-evenly'>
//                 <Button variant={'outline'} onClick={() => increaseVolume()}>Increase Volume</Button>
//                 <Button variant={'outline'} onClick={() => decreaseVolume()}>Decrease Volume</Button>
//             </div>
//             <h1>{volume}</h1>


export default AudioButton