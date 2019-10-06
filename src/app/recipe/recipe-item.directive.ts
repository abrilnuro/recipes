import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[recipeItemDirective]'
})

export class RecipeItemDirective {

    private elementRef: HTMLElement;
    @Input('background-image') backgroundImage: string;
    //@Input('z-index') zIndex: string;
    

    constructor(private er: ElementRef, private renderer: Renderer) {
        this.elementRef = er.nativeElement;
    }

    ngOnInit() {
        //this.elementRef.style.backgroundImage = 'url(' + this.backgroundImage + ')';
    }

    @HostListener('mouseover') onMouseOver() {
        this.elementRef.style.transform = 'translate3d(-30px, 0px, 0px)';
    }

    @HostListener('mouseleave') onMouseleave() {
        this.elementRef.style.transform = 'translate3d(0px, 0px, 0px)';
    }
}