import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div id="search">
	<svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
		<rect class="bar"/>
		
		<g class="magnifier">
			<circle class="glass"/>
			<line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
		</g>

		<g class="sparks">
			<circle class="spark"/>
			<circle class="spark"/>
			<circle class="spark"/>
		</g>

		<g class="burst pattern-one">
			<circle class="particle circle"/>
			<path class="particle triangle"/>
			<circle class="particle circle"/>
			<path class="particle plus"/>
			<rect class="particle rect"/>
			<path class="particle triangle"/>
		</g>
		<g class="burst pattern-two">
			<path class="particle plus"/>
			<circle class="particle circle"/>
			<path class="particle triangle"/>
			<rect class="particle rect"/>
			<circle class="particle circle"/>
			<path class="particle plus"/>
		</g>
		<g class="burst pattern-three">
			<circle class="particle circle"/>
			<rect class="particle rect"/>
			<path class="particle plus"/>
			<path class="particle triangle"/>
			<rect class="particle rect"/>
			<path class="particle plus"/>
		</g>
	</svg>
	<input (input)="onInput($event)" placeholder="Cerca..." type="search" aria-label="Search for inspiration"/>
</div>
  `,
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent { 

  @Output() emitSearchValue: EventEmitter<Event> = new EventEmitter<Event>()

  onInput(event: Event) {
    this.emitSearchValue.emit(event)
  }
}

