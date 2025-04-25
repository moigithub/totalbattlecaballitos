import PageTitle from './pageTitle'

export const GameCombatInfo = () => {
  return (
    <>
      <PageTitle title='Game Combat' />

      <div className='p-5 pt-[56px] text-gray-100'>
        <hr />
        <h1 className='text-5xl font-bold text-green-700 '>Combat system &amp; tips</h1>
        <ul className='list-disc list-inside'>
          <li className='mt-2'>
            <span className='text-lime-700'>Stack order</span> is based on{' '}
            <span className='text-lime-700'>stack strength</span> + bonus (no feature bonus)
          </li>

          <li className='mt-2'>
            <span className='text-lime-700'>calculating stack strength</span>
            <div className='ml-8'>
              <p className='text-blue-500'>example:</p>
              <p className='text-blue-500'>
                100 units of Archer G1, each unit have strength= 50, strengthBonus= 10%
              </p>
              <br />
              <p className='text-blue-500'>
                <span className='text-yellow-400'>unitStrengthWithBonus</span> = strength * (1 +
                strength bonus / 100)
              </p>
              <p className='text-blue-500'>totalStackStrength = units * unitStrengthWithBonus</p>
              <br />
              <p className='text-blue-500'>totalStackStrength = 100 * 50 * (1 + 10 / 100) = 5500</p>
            </div>
          </li>
          <li className='mt-2'>
            <span className='text-lime-700'>The stack with highest strength attack first</span>
          </li>
          <li className='mt-2'>
            The <span className='text-purple-600'>efective damage</span> done to the enemy is
            calculated using the feature bonus
          </li>
          <li className='mt-2'>
            <span className='text-lime-700'>Calculating efective damage</span>
            <div className='ml-8'>
              <p>Most of the troops units in general (monsters, army, etc) have a feature bonus</p>
              <p className='text-blue-500 ml-5'>Example: archer G1</p>
              <p className='text-blue-500 ml-5'>have feature bonus against melee 52%</p>
              <p className='text-blue-500 ml-5'>and feature bonus against flying 67%</p>
              <br />
              <p>
                Those feature bonus are used to calculate the{' '}
                <strong className='font-bold italic'>"efective damage"</strong> you can do to the
                enemy
              </p>
              <p className='text-blue-500 ml-5'>
                100 units of Archer G1, each unit have strength= 50, strength bonus= 10%
              </p>
              <p className='text-blue-500 ml-5'>
                <span className='text-yellow-400'>unitStrengthWithBonusAndFeatureBonus</span> =
                strength * (1 + (strengthBonus + vsMeleeBonus) / 100)
              </p>
              <p className='text-blue-500 ml-5'>
                totalStackEfectiveDamageVsMelee = units * unitStrengthWithBonusAndFeatureBonus
              </p>
              <p className='text-blue-500 ml-5'>
                totalStackEfectiveDamageVsMelee = 100 * 50 * (1 + (10+52) / 100) = 8100
              </p>
              <br />
              <p>
                So, based on the archer G1 example, we can say, this archer can do 3 types of
                damage/amount
              </p>
              <p>
                <span className='text-purple-700 ml-5'>(regular damage)</span> totalStackStrength =
                100 * 50 * (1 + 10 / 100) = <span className='text-red-600 font-bold'>5500</span>
              </p>
              <p>
                <span className='text-purple-700 ml-5'>(vsMelee)</span>{' '}
                totalStackEfectiveDamageVsMelee = 100 * 50 * (1 + (10+52) / 100) ={' '}
                <span className='text-red-600 font-bold'>8100</span>
              </p>
              <p>
                <span className='text-purple-700 ml-5'>(vsFlying)</span>{' '}
                totalStackEfectiveDamageVsFlying = 100 * 50 * (1 + (10+67) / 100) ={' '}
                <span className='text-red-600 font-bold'>8850</span>
              </p>
            </div>
          </li>
          <li className='mt-2'>
            <span className='text-lime-700'>
              Picking a target, is based on the greatest possible damage, where it can be used
              better
            </span>
            <div className='ml-10'>
              <ul className='list-disc list-inside'>
                <li>
                  enemy should be healthy enough, above my damage/strength with bonus/no feat.bonus
                </li>
                <li>the enemy which we can do most damage would be picked as target</li>
                <li>
                  if the most damage i can do to the enemies are the same, we determine the target
                  based on the biggest threat (how much damage the enemy could do to us)
                </li>
              </ul>
              <img src='/targetSelectionRules1.jpg' alt='target selection rules example' />
              <img src='/targetSelectionRules2.jpg' alt='target selection rules example' />
              <img src='/targetSelectionRules3.jpg' alt='target selection rules example' />
            </div>
            <br />
          </li>
          <li className='mt-2'>
            <span className='text-lime-700'>Damaged applied</span>
            <div className='ml-8'>
              <p>once target is picked, then the efective damage will be calculated</p>
              <p>
                IF the efective damage, exceeds the enemy health stack, then the max damage to apply
                would be the stack health available
              </p>
              <p className='text-blue-500'>example:</p>
              <p className='text-blue-500'>enemy, flying, total health stack = 8500</p>
              <p className='text-blue-500'>100 archers G1 with 10% strength bonus</p>
              <p>efective damage vs flying = 8850</p>
              <p>max damage applied = 8500</p>
            </div>
          </li>
          <li className='mt-2'>
            <span className='text-lime-700'>
              Calculating number of units needed to kill the enemy stack
            </span>
            <div className='ml-8'>
              <p>totalUnits = enemyStackHealth / damage</p>
              <br />
              <p>you can get 2 values: max units and min units needed to kill</p>
              <p>
                where damage could be <span className='text-yellow-400'>unitStrengthWithBonus</span>{' '}
                or <span className='text-yellow-400'>unitStrengthWithBonusAndFeatureBonus</span>
              </p>
              <p>maxUnits = enemyStackHealth / unitStrengthWithBonus </p>
              <p>minUnits = enemyStackHealth / unitStrengthWithBonusAndFeatureBonus </p>
              <p className='text-blue-500'>example:</p>
              <p className='text-blue-500'>enemy, flying, total health stack = 10000</p>
              <p className='text-blue-500'>archers G1 with 10% strength bonus</p>
              <p>maxUnits = enemyStackHealth / unitStrengthWithBonus </p>
              <p className='text-blue-500'>unitStrengthWithBonus = 50 * (1 + 10 / 100) = 55</p>
              <p>
                maxUnits = 10000 / 55 = <span className='text-purple-600'>181</span>.81{' '}
              </p>
              <p>checking:</p>
              <p>
                50 * (1 + 10 / 100) * <span className='text-purple-600'>181</span> = 9955
              </p>
              <p>
                if we round up, the total damage will be higher, making the targetSelector to pick
                another one (check elf30 firePhoenix vs ent or bear)
              </p>
              <p>
                50 * (1 + 10 / 100) * <span className='text-purple-600'>182</span> ={' '}
                <span className='text-red-600'>10010</span>
              </p>
              <br />
              <p>minUnits = enemyStackHealth / unitStrengthWithBonusAndFeatureBonus </p>
              <span className='text-purple-700 ml-5'>(vsFlying)</span>{' '}
              unitStrengthWithBonusAndFeatureBonus = 50 * (1 + (10+67) / 100) ={' '}
              <span className='text-red-600 font-bold'>88.5</span>
              <p>
                minUnits = 10000 / 88.5 =<span className='text-purple-600'>112</span>.994
              </p>
              <p>checking:</p>
              <p>
                50 * (1 + (10+67) / 100) * <span className='text-purple-600'>112</span> = 9912
              </p>
              <p>
                if we round up, the total damage will be higher, making the targetSelector to pick
                another one (check elf30 firePhoenix vs ent or bear)
              </p>
              <p>
                50 * (1 + (10+67) / 100) * <span className='text-purple-600'>113</span> =
                <span className='text-red-600'>10000.5 </span>
              </p>
            </div>
          </li>
          <li className='mt-2'>all damage received is accumulated</li>
          <li className='mt-2'>
            Is better to avoid sending units with featured attack bonus type, to avoid extra losses,
            IF your unit is not healthy enough to survive the attack
          </li>
          <li className='mt-2'>
            to dodge an attack, the defender stack health, must be lower than the attacker damage
            (+bonus, without feature bonus), so it picks another target
          </li>
        </ul>

        <p>Resumen</p>
        <ul>
          <li>
            1. La secuencia de ataque se determina por la "fuerza del escuadron", primero el más
            fuerte, luego el siguiente más fuerte, y así hasta el más débil..
          </li>
          <li>
            2. El escuadrón mas fuerte (paso anterior) que aun no haya atacado, atacará al escuadrón
            al que pueda infligir el mayor daño posible (el calculo de daño incluye
            caracteristicas).
          </li>
          <li>
            3. Solo se atacara, si el oponente tiene salud suficiente, mayor o igual a la "fuerza
            del escuadron", si no se buscara otro objetivo
          </li>
          <li>
            4. si varios enemigos pueden recibir el mismo daño, atacará al escuadrón que sea la
            mayor amenaza.
          </li>
          <li>
            5. la sequencia de ataque es alternada, Si un bando tiene más escuadrones (ejemplo: 10
            vs 5), los escuadrones extras esperan su turno hasta que todos hayan atacado una vez, y
            luego se repite el ciclo, hasta que solo quede un bando con vida
          </li>
          <li>7. el daño acumulado solo permanece durante la batalla</li>
          <li>8. el daño maximo aplicado se limita a la cantidad de vida que tiene el oponente</li>
          <p>formulas:</p>
          <p>
            fuerza del escuadron = la fuerza de la tropa + el % de fuerza adicional × número de
            tropas en el escuadrón (NO incluye las características)
          </p>
          <p>example: 100 archerG1 with 55% strength bonus vs flying</p>
          <p>fuerza del escuadron =50 + 55% * 100 = 7750</p>
          <p>
            daño maximo = la fuerza de la tropa + el % de fuerza adicional + el % de las
            caracteristicas × número de tropas en el escuadrón
          </p>
          <p>example: 100 archerG1 with 55% strength bonus vs flying (67%)</p>
          <p>daño maximo =50 + 55% + 67% * 100 = 11100</p>
        </ul>

        <h2 className='mt-8 font-bold text-4xl text-green-700'>Some strategies used on citadels</h2>
        <ul className='list-disc list-inside'>
          <li className='mt-4 text-red-700'>TO prevent centaurs from killing your catapults</li>
          <div className='ml-5'>
            <p>
              <span className='text-pink-600 font-bold'>SEND</span> some units with vsMounted
              feature bonus to kill centaur, like vultures or griffins, make sure the total strength
              of those units is not higher than the centaurus total health, and position it (stack
              order) before centaur hit your catapult, -- by targeting centaurs before they hit you,
              you altering the attack order, by reducing their numbers, so if a few survive, they
              will not have enough strength to damage you
            </p>
            <img src='./killCentaurStrategy.jpg' alt='kill centaur before it hit our catapults' />
          </div>

          <li className='mt-2'>
            <span className='text-pink-600 font-bold'>ADD</span> a ranged unit with HUGE health
            (like canoner), so it can survive centaur attack, -- centaurs have a 50% feature bonus
            against ranged unit, so they will "prefer" to attack your canoner instead your catapults
          </li>

          <li className='mt-2'>
            <span className='text-pink-600 font-bold'>REDUCE</span> your catapults stack health, by
            lowering the amount you sending, and use as many catapults stack needed to compensate
            your previous damage, -- having lower health than centaur damage, centaur will skip your
            catapults and find another target where it can do more damage,
            <img src='./layerCats.jpg' alt='layer catapults' />
          </li>
        </ul>
      </div>
    </>
  )
}
