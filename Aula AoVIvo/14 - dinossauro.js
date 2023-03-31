function dinossauro(perna){
    switch(perna){
        case 'esquerda':
            return 'English';
            break;
        case 'direita':
            return 'Français';
            break;
        case 'nenhuma':
            return 'Português';
            break;
        case 'as duas':
            return 'Ai eu caio, né!';
            break;
        default:
            return 'Escolhe algo que faça sentido!';
    }
}

console.log(dinossauro('as a'));