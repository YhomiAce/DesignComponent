type RandomNumberType = {
  value: number
}

type PostiveNumber = RandomNumberType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}

type ZeroNumber = RandomNumberType & {
  isZero: boolean
  isPositive?: never
  isNegative?: never
}

type RandomNumberProps = PostiveNumber | NegativeNumber | ZeroNumber

const RandomNumber = (props: RandomNumberProps) => {
  return (
    <div>
        { props.value} {props.isPositive && 'postive'} {props.isNegative && 'negative'}
        {props.isZero && 'zero'}
    </div>
  )
}

export default RandomNumber