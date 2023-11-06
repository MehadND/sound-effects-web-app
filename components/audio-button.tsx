"use client";
import React from 'react'
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { Button } from './ui/button';

const AudioButton = () => {
    const { load, volume, setVolume } = useGlobalAudioPlayer();

    const volumeIncrement = 0.1; // Set your desired volume increment (e.g., 0.1 for a 10% change)

    function playSound() {
        load('/press_click_free/CLICK_003.wav', {
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
        <div>
            <Button onClick={() => playSound()}>Play Sound</Button>
            <Button onClick={() => increaseVolume()}>Increase Volume</Button>
            <Button onClick={() => decreaseVolume()}>Decrease Volume</Button>
            <h1>{volume}</h1>
        </div>
    );
}


export default AudioButton