
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import clCardService from '../../Service/clCardService'


export default function ClCardDetail() {

    let { id } = useParams()


    let [clcard, setCard] = useState({})


    useEffect(() => {
        let cardService = new clCardService()


        const fetchCards = async () => {
            const result = await cardService.getClCardById(id);
            setCard(result.data.data);
            console.log(result.data.data);
           
        };
        fetchCards();
    }, [id]);

    return (
        <div >


            <div className="ui card" style={{ position: "absolute", top: "100px", right: "1000px", boxShadow: '5px 5px grey', backgroundColor: '#FFB347', fontSize: "16px" }}>
                <div className="content">
                    <div className="center aligned header"> Cari Detaylar</div>
                    <div className="center aligned description">

                        <li className="list-group-item"> Cari Kodu: {clcard.code}</li>
                        <li className="list-group-item">  Cari  Açıklaması: {clcard.name}</li>
                        <li className="list-group-item">  Cari  Grup Kodu: {clcard.groupCode}</li>

                        <li className="list-group-item">  Cari  Türü :  {clcard.clType && clcard.clType.name}</li>
                        <li className="list-group-item">  Adres: {clcard.address}</li>
                        <li className="list-group-item">  Adres: {clcard.address2}</li>
                        <li className="list-group-item">  Telefon: {clcard.cellPhone1}</li>

                    </div>
                </div>
                <div className="extra content">

                </div>
            </div>


            <div className="ui card" style={{ position: "absolute", top: "100px", right: "600px", boxShadow: '5px 5px grey', backgroundColor: '#FFC107', fontSize: "16px" }}>
                <div className="content">
                    <div className="center aligned header">Cari Detaylar</div>
                    <div className="center aligned description">

                        <li className="list-group-item">  Telefon: {clcard.cellPhone2}</li>
                        <li className="list-group-item">  Telefon: {clcard.cellPhone3}</li>
                        <li className="list-group-item">  email: {clcard.email}</li>
                        <li className="list-group-item">  taxOffice: {clcard.taxOffice}</li>
                        <li className="list-group-item">  taxNumber: {clcard.taxNumber}</li>
                    </div>
                </div>
                <div className="extra content">

                </div>
            </div>
            <div class="ui card" style={{ position: "absolute", top: "100px", right: "200px", boxShadow: '5px 5px grey', backgroundColor: '#FF5733', fontSize: "16px" }}>
                <div className="content">
                    <div className="center aligned header">Diğer Detaylar</div>
                    <div className="center aligned description">
                        <li className="list-group-item"> speCode1: {clcard.speCode1}</li>
                        <li className="list-group-item"> speCode2: {clcard.speCode2}</li>
                        <li className="list-group-item"> speCode3: {clcard.speCode3}</li>
                        <li className="list-group-item"> speCode4: {clcard.speCode4}</li>
                        <li className="list-group-item"> speCode5: {clcard.speCode5}</li>
                        <li className="list-group-item">  isView: {clcard.isView ? "Aktif" : "Pasif"}</li>
                        <li className="list-group-item"> isDeleted: {clcard.isDeleted ? "Aktif" : "Pasif"}</li>

                        <li className="list-group-item"> Cari Oluşturulma Tarihi :{clcard.createdDate}</li>
                        <li className="list-group-item">Cari Oluşturan  Kişi : {clcard.createdBy} </li>
                        <li className="list-group-item">Cari Aktiflik Durumu : {clcard.isActive ? "Aktif" : "Pasif"} </li>
                        <li className="list-group-item">Cari Aktiflik Durumu : {clcard.isActive ? "Aktif" : "Pasif"} </li>
                    </div>
                </div>
                <div class="extra content">

                </div>
            </div>







        </div>
    )
}