import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'
import Wavesurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input() audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: Wavesurfer;
  isPlaying = signal(false)

  ngAfterViewInit(){
    this.ws = Wavesurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    });
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }

  player(){
    this.ws.playPause()
  }
}
