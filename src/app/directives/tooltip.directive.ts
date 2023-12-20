import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ITooltipData } from '../interface/tooltip-data';

declare var bootstrap: any; // Declare bootstrap to use its methods

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input() tooltipData!: ITooltipData;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    const tooltip = new bootstrap.Tooltip(this.el.nativeElement, {
      title: this.getTooltipContent(),
      placement: 'bottom',
      trigger: 'manual',
      template: `<div class="tooltip" role="tooltip">
                   <div class="tooltip-arrow"></div>
                   <div class="tooltip-inner custom-tooltip">${this.getTooltipContent()}</div>
                 </div>`,
    });

    tooltip.show();
  }

  private getTooltipContent(): string {
    if (this.tooltipData.type === 'address') {
      return `Address: ${this.tooltipData.address}`;
    } else if (this.tooltipData.type === 'coordinates') {
      return `Latitude: ${this.tooltipData.latitude}, Longitude: ${this.tooltipData.longitude}`;
    } else if (this.tooltipData.type === 'description') {
      return `Description: ${this.tooltipData.description}`;
    } else {
      return '';
    }
  }
  private hideTooltip() {
    const tooltip = bootstrap.Tooltip.getInstance(this.el.nativeElement);

    if (tooltip) {
      tooltip.hide();
    }
  }

  ngOnDestroy() {
    this.hideTooltip();
  }
}