import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Event() onClick: EventEmitter;

  @Prop() label: string;

  handleClick(event: UIEvent) {
    this.onClick.emit(event);
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>{this.label}</button>;
  }
}
