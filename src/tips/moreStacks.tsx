export const MoreStacksTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>Have troop loses because long fight? </h3>

      <p>
        Game fight system uses a turn-based fight system, first you hit then I hit (or viceversa)
      </p>
      <p>
        if one side (you or citadel) have more stacks, every stack who didnt hit yet, will hit at
        the end of the cycle/lap, and repeat again until a winner is declared
      </p>
      <p>
        IF you losing troops on 2nd cycle, add more stacks, dont give the oportunity for the
        opponent to hit you, and loose troops because your units are not healthy enough
      </p>
    </div>
  )
}
