import React from 'react'

export default function GameTitle() {
  return (
    <div className="container text-center" id="gameTitle">
        <div className="row">
            <div className="col-1">
                <p>Město</p>
            </div>
            <div className="col-2">
                <p>Kraj</p>
            </div>
            <div className="col-2">
                <p>Počet obyvatel</p>
            </div>
            <div className="col-2">
                <p>Rozloha</p>
            </div>
            
        </div>
    </div>
  )
}
