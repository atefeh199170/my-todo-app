export function createLabel(container: HTMLDivElement, text: string) {
    const label = document.createElement('label');

    label.id = 'my-label';
    label.innerText = text;

    if (container)
        container.appendChild(label);
}
