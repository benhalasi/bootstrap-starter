import { getFlexText } from './flex'

const demonstrate = (elementId: string) => {
    document.getElementById(elementId)
        .innerHTML = getFlexText()
}

demonstrate('demo')
