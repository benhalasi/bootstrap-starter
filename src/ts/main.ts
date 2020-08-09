import { getFlexText } from './flex'

const demonstrate = (elementId: string) => {
    const element = document.getElementById(elementId)
    element.innerText = getFlexText()
}

demonstrate('demo')
