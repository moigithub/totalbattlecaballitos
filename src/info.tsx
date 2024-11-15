export const Info = () => {
  return (
    <div className='info'>
      <h2>Tutorial - check the image below</h2>
      <ol>
        <li>load all bonus/vip/etc</li>
        <li>use the last battle report if you have</li>
        <li>or create a Battle Report to get the bonuses values for the troops you going to use</li>
        <p>on the example i am sending 1 of each</p>
        <li>copy the strength and health bonus on the respective fields</li>
        <li>pick the troops you want to use</li>
        <li>drag and drop the cards to arrange/order them as you like</li>
        <li>click on calculate</li>
      </ol>
      <p>if the bonuses are not correct, the stack order will vary</p>
      <img src='./tbcalc.gif' alt='tutorial' />

      <div>
        <ul style={{ color: 'pink' }}>
          <li>The cheapest group should go above, they might hit, or get killed at first round</li>
          <li>
            Stack with Highest Strength attack first{' '}
            <a href='https://www.youtube.com/watch?app=desktop&v=8rdVjHNRXn0' target='_blank'>
              check youtube here
            </a>
          </li>
          <li>
            Send sacrifices first (the stack with highest str) ie: 500k strength for the whole stack
          </li>
          <li>after sacrifices, set all rest of eachs stack with lower strength, ie: 490k</li>
          <li>
            Put more points on strength, or max strength first, leave health after you maxed
            strength,
          </li>
          <li>
            you will lose your troops anyway (on events like doomsday), so better to kill the max
            you can, and strength determines how hard you hit
          </li>
        </ul>

        <br />
        <hr />
        <p>LOAD ALL your bonuses/buff (vip, personal-&gt;strenght, etc), before use this</p>
        <p>
          you can find the bonus value on <span>Barracks -&gt; Guardsmen -&gt; (any) Rider</span>
        </p>

        <hr />
        <p>
          recommend to send higher amount of lowest soldiers like G1, so they attack (/die) first
        </p>
        <p>because they are cheaper/faster to rebuild</p>
        <p>the recomendation is to use 2 groups: example g1 and g2</p>
        <p>
          because if you get attacked first and you sent only one group, you will not get any
          kills/exp
        </p>
        <p>
          if send two groups, and the first group get killed, the second group will get you
          experience
        </p>
        <hr />
        <p>
          * use 3 groups or more only if you have a bigger player on raid with many groups/stacks
        </p>
        <hr />
        <p>and finally... do whatever you want</p>
      </div>
      <img src='./bonus.jpg' alt='bonus' />
    </div>
  )
}
