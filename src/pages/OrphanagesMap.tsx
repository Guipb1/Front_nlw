import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'; /*tilelayer = servidor para pegar as imagens do mapa,ruas,etc */
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css'; /*estilização padrao do mapa*/
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
    iconUrl:mapMarkerImg,

    iconSize:[58, 68],
    iconAnchor:[29,68],
    popupAnchor: [170, 2]
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p> Muitas ciranças estao esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong> Curitiba</strong>
                    <span> Parana</span>
                </footer>
            </aside>

            <Map 
                center={[-25.4212124,-49.130795]} /*propriedade obrigatoria, latitude e longitude*/
                zoom={12}
                style={{width: '100%' , height:'100%'}}    /*o primeiro {} indica que quero incluir um codigo js dentro da propriedade e o outro {} indica um objeto js*/
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                    icon={mapIcon}
                    position = {[-25.4212124,-49.130795]}
                >
                    <Popup closeButton= {false} minWidth={240} maxWidh={240} className= "map-popup">
                        Lar dos meninos
                        <Link to="">
                            <FiArrowRight size={20} color ="#FFF"/>
                        </Link>

                    </Popup>
                    
                </Marker>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;