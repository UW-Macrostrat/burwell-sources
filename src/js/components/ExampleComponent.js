import React, { Component, PropTypes } from 'react'
import SourceMap from './SourceMap'

class ExampleComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { msg, clicks, onClick, data } = this.props

    return (
      <div className='container'>
        <h1 className='title'>Macrostrat Map Sources</h1>
        {data.map(d => {
          return (
            <div className='row source-row' key={d.properties.source_id}>
              <div className='col s12 m8 l8'>
                <h4>{d.properties.name}</h4>
                <p>{d.properties.authors} ({d.properties.ref_year}). <i>{d.properties.ref_title}</i>. {d.properties.ref_source}. {d.properties.isbn_doi}. Retrieved from <a href={d.properties.url} target='_blank'>{d.properties.url}</a>. </p>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Source ID</b></td>
                      <td>{d.properties.source_id}</td>
                    </tr>
                    <tr>
                      <td><b>Scale</b></td>
                      <td><span className={"badge left scale-badge " + d.properties.scale}>{d.properties.scale}</span></td>
                    </tr>
                    <tr>
                      <td><b>Features</b></td>
                      <td>{d.properties.features}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='col s12 m4 l4'>
                <SourceMap feature={d}/>
              </div>
            </div>
          )
          return <p>{d.name}</p>
        })}
      </div>
    )
  }
}

ExampleComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  clicks: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
}

export default ExampleComponent
