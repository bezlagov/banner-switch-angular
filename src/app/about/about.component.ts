import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    size: number = 200;
    currentImage: string;
    private currentIndex: number = 0;
    private imageList: string[] = [
        "assets/img1.png",
        "assets/img2.png",
        "../../assets/img3.png",
        "../../assets/img4.png",
    ];

    constructor() {
        this.currentImage = this.imageList[this.currentIndex];
    }

    ngOnInit(): void {
        setInterval(() => this.onClickMove(true), 2000);
        //This is alternative
       // document.addEventListener('keyup',(event)=>this.onKeyClick(event));
    }


    @HostListener('document:keyup', ['$event'])
    onKeyClick(event: KeyboardEvent) {
        if (event.key == "ArrowLeft") {
            this.onClickMove(false);
        } else if (event.key == "ArrowRight") {
            this.onClickMove(true);
        }
    }

    onClickMove(moveRightSide: boolean) {
        if (moveRightSide) {
            this.currentIndex++;
            if (this.currentIndex > this.imageList.length - 1) {
                this.currentIndex = 0;
            }
        }
        else {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.imageList.length - 1;
            }
        }

        this.currentImage = this.imageList[this.currentIndex];
    }
}
