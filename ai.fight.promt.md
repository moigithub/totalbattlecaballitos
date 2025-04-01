crear un codigo en javascript para crear un sistema de peleas entre 2 partes
con las siguientes reglas:
- cada unidad tiene una cantidad de fuerza y vida
- las unidades pueden ser de tipo guardias y monstruos, y los monstruos pueden ser bestias, elementales, gigantes y dragones
- ademas los guardias y monstruos tienen un categoria que puede ser melee,ranged,mounted y flying

- las unidades forman tropas
- cada tropa puede tener N numero de unidades
- las partes pueden tener N numero de tropas
- la cantidad de tropas pueden ser diferentes entre partes

- existen tipos de bonos que afectan el daño total producido
- las unidades de tipo melee tiene bono adicional en porcentaje contra unidades del tipo ranged al 30%
- las unidades de tipo ranged tiene bono adicional en porcentaje contra unidades del tipo flying al 40%
- las unidades de tipo mounted tienen bono adicional en porcentaje contra unidades del tipo melee al 15%

- el daño total se calcula en base a la fuerza multiplicado por el numero de unidades + el porcentaje del bono de daño
- el atacante selecciona su objetivo en base al mayor daño que posiblemente pueda hacer, teniendo en consideracion el bono
- si la vida disponible de las tropas que selecciono el atacante es menor que el daño, el ataque no procedera
- si el atacante no encuentra ningun objetivo, se procedera a atacar a la tropa que aun este viva y que sea la mas fuerte

- debe tener turnos alternados, primero ataca el lado A y luego el lado B, cada lado solo puede atacar una vez,
si hay una diferencia entre el numero de tropas, las tropas restantes que aun no hayan atacado, atacaran al final,
antes de repetir el ciclo

- el orden de ataque se basa en la tropa que tiene mas fuerza sin considerar el bono de daño adicional
- la pelea termina cuando una de las partes no tenga tropas con vida

