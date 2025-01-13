export default function NavButton(type) {
    const button = document.createElement('button');
    button.classList.add('button')
    button.textContent = type
    button.setAttribute('data-js', `button-${type}`)
    return button
}