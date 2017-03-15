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
        {data.map(d => {
          return (
            <div className='row source-row' key={d.properties.source_id}>
              <div className='col s8'>
                <h4>{d.properties.name}</h4>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Publication</b></td>
                      <td>{d.properties.ref_title}</td>
                    </tr>
                    <tr>
                      <td><b>URL</b></td>
                      <td><a href={d.properties.url} target='_blank'>{d.properties.url}</a></td>
                    </tr>
                    <tr>
                      <td><b>Author(s)</b></td>
                      <td>{d.properties.authors}</td>
                    </tr>
                    <tr>
                      <td><b>Year</b></td>
                      <td>{d.properties.ref_year}</td>
                    </tr>
                    <tr className={d.properties.ref_source ? '' : 'hide'}>
                      <td><b>Source</b></td>
                      <td>{d.properties.ref_source}</td>
                    </tr>
                    <tr className={d.properties.isbn_doi ? '' : 'hide'}>
                      <td><b>ISBN/DOI</b></td>
                      <td>{d.properties.isbn_doi}</td>
                    </tr>
                    <tr>
                      <td><b>Source ID</b></td>
                      <td>{d.properties.source_id}</td>
                    </tr>
                    <tr>
                      <td><b>Scale</b></td>
                      <td>{d.properties.scale}</td>
                    </tr>
                    <tr>
                      <td><b>Features</b></td>
                      <td>{d.properties.features}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='col s4'>
                <SourceMap geom={d.geometry} sourceId={d.properties.source_id}/>
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
