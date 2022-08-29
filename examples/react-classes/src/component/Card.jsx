import React, { Component, PureComponent } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'


// export const Component = (props) => {
//   const { title, text } = useSelector(state => state)
//   const dispatch = useDispatch()

//   return(
//     <div>
//       {props.children}
//     </div>
//   )
// }


class Card extends Component {
  constructor() {
    super()
    console.log('Constructor')
    this.state = {
      showMore: false,
      results: []
    }
  }

  handleClick = () => {
    this.setState({ showMore: !this.state.showMore })
  }

  async componentDidMount() {
    // useEffet(() => {}, [])
    console.log('Mount')

    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/')
      const data = await response.json()
      this.setState({ results: data.results })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate() {
    // useEffect(() => {})
    console.log('Update')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("🚀 nextState", nextState)
  //   console.log("🚀 nextProps", nextProps, this.props)
  //   console.log('Should update')

  //   if (nextProps.title !== this.props.title) {
  //     return true
  //   }

  //   if (nextState.showMore !== this.state.showMore) {
  //     return true
  //   }

  //   return false
  // }


  render() {
    const { title, text } = this.props
    const { showMore, results } = this.state

    console.log(this.props)

    console.log('Render')

    return (
      <div className="card">

        {
          results ? results.map(({ name, image }) => (
            <div key={name}>
              <img src={image} alt={name} />
              <p>{name}</p>
            </div>
          )) : <p>Loading</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  title: state.title,
  text: state.text
})

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch({ type: 'SET_TITLE', payload: title }),
  setText: text => dispatch({ type: 'SET_TEXT', payload: text })
})

export default Card

// export default connect(mapStateToProps, mapDispatchToProps)(Card)
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))
