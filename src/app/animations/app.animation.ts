import { trigger, state, style, animate, transition } from '@angular/animations';

// visibility animation
export function visibility() {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}

// animation after router changed
export function flyInOut() {
  return trigger('flyInOut', [
    state('*', style({
      transform: 'translateX(0)', opacity: 1
    })),
    transition(':enter', [
      style({ transform: 'translateX(-100%)', opacity:0}), // style before enter
      animate('500ms ease-in')
    ]),
    transition(':leave', [
      animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity:0})) // style after leave
    ])
  ])
}

// animation after data is feteched
export function expand() {
    return trigger('expand', [
        state('*', style({ transform: 'translateX(0)', opacity: 1 })),
        transition(':enter', [
            style({ transform: 'translateY(-50%)', opacity:0 }), // style before enter
            animate('200ms ease-in', style({ transform: 'translateX(0)', opacity: 1 })) // style after entered
        ])
    ]);
}
