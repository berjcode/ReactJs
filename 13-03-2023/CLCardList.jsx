import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import clCardService from '../../Service/clCardService'
import DataTable from 'react-data-table-component';
import { Container, Col, Row, Form,Modal,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function CLCardList() {

  const [selectedRows, setSelectedRows] = useState([])
  let [cardList, setCardList] = useState([])
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //deleteModal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Get
  useEffect(() => {
    let cardService = new clCardService()


    const fetchCards = async () => {
      const result = await cardService.getClCards();
      setCardList(result.data.data);
      setData(result.data.data);
    };
    fetchCards();
  }, []);


  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true

    },
    {
      name: "Code",
      selector: row => row.code,
      sortable: true
    },
    {
      name: "Name",
      selector: row => row.name,
      sortable: true

    },

    {
      name: "Tür",
      selector: row => row.clType.name,
      sortable: true

    },

    {
      name: "Telefon",
      selector: row => row.cellPhone1,
      sortable: true

    }




  ];

  function handleFilter(event) {
    if (!event.target.value) {
      setData(cardList);
    } else {
      const newData = data.filter(function (row) {
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
      });
      setData(newData);
    }

  }



  function HandleSelectedRows(selectedRows) {
    setSelectedRows(selectedRows.selectedRows);
  }

  function HandleButtonClick() {
    if (selectedRows.length === 1) {
      const selectedIds = selectedRows.map(row => row.id);
      navigate(`/clcard/${selectedIds.join(',')}`);
    }else
    {
      alert('lütfen bir satır seçin')
    }


  }

  //Post



  //Delete
  function HandleDeleteButton()
  {
    
    const cardService =new clCardService();
    const selectedIds= selectedRows.map(row => row.id);

    selectedIds.forEach(async(id) => {
      await cardService.deleteClCard(id);
    });

      // setData(data.filter((row) => !selectedIds.includes(row.id)));
      
    handleClose();
    window.location.reload();
  }

  //Update

  function HandleUpdateClickButon(){
      if(selectedRows.length ===1)
      {
        const selectedIds = selectedRows.map(row => row.id);
        navigate(`/clcard/update/${selectedIds.join(',')}`);
      }else{
        alert("lütfen bir satır seçin.")
      }
  }

  return (
    <div    >
      <Container >
        <Row style={{ height: "100px" }}>
          <Col> <p className='text-center' style={{ fontSize: "34px", boxShadow: '5px 5px 5px grey' }}> Cari İşlemleri </p></Col>

        </Row>

        <Row style={{ height: "300px", margin: "" }}>
          <Col md={2}>


            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

              <button className="ui  green  large  button m-4" onClick={HandleButtonClick} style={{ width: "200px" }}>Detaya Git</button>

              <button className="ui  red  large  button m-4"  onClick={handleShow}  style={{ width: "200px" }} >Sil</button>
              <NavLink to="/clcard/add">
              <button className="ui  orange large button m-4" style={{ width: "200px" }}> Oluştur</button>
                </NavLink>

              
              <button className="ui  blue  large button m-4" style={{ width: "200px" }}  onClick={HandleUpdateClickButon}> Güncelleme Yap</button>
            </div>
          

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Silme İşlemi</Modal.Title>
        </Modal.Header>
        <Modal.Body>Silmek istediğinize emin misiniz? Bu işlem geri alınamaz.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Hayır
          </Button>
          <Button variant="primary" onClick={HandleDeleteButton}>
            Evet
          </Button>
        </Modal.Footer>
      </Modal>
          </Col >

          <Col md={10} >
            <div className='text-end mb-4' style={{ boxShadow: '5px 5px 5px black' }}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleFilter}
                />
              </Form>
            </div>
            <div style={{ boxShadow: '5px 5px 5px black' }}>
              <DataTable columns={columns}
                data={data} selectableRows dense fixedHeader highlightOnHover pagination onSelectedRowsChange={HandleSelectedRows}  pointerOnHover paginationPerPage={8} 
                 noDataComponent={"Gösterilecek bir veri yoktur."}>

              </DataTable>
            </div>

          </Col>

        </Row>




      </Container>
    </div>
  )
}
