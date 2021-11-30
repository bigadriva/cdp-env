import { Button, ButtonBase, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  clientesText: {
    padding: "20px 5px 5px 5px",
    textAlign: "left",
    height: "50px"
  },
  iconDiv: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    fontSize: "10px",
    top: "0px",
    right: "0px",
    color: "#007CFF",
  },
}))

const buttonStyle = {
  boxShadow: "0px 1px 4px #0004",
  borderRadius: 8,
  width: "100px",
  backgroundColor: "#ffffff",
  fontSize: "13px"
}

const borderStyle = {
  border: "1px solid #0004",
  borderRadius: 8,
  width: "100px",
  fontSize: "13px",
}

const acoesButtonStyle = {
  backgroundColor: "#ffffff",
  boxShadow: "0px 1px 4px #0004",
  borderRadius: 8,
  justifyContent: "space-between",
  borderColor: "#808080",
  color: "#000",
  fontSize: "13px",
  textAlign: "left",
  width: "100%",
  maxWidth: "400px",
  padding: "20px 10px",
  textTransform: "initial"
}

const filterButtonStyle = {
  backgroundColor: "#007CFF",
  color: "#fff",
  border: "1px solid #808080",
  borderRadius: 8,
  justifyContent: "center",
  fontSize: "12px",
  textAlign: "left",
  width: "100%",
  maxWidth: "400px",
  padding: "10px 10px",
  textTransform: "initial"
}

const nextButtonStyle = {
  // backgroundColor: "#ffffff",
  border: "1px solid #808080",
  borderRadius: 8,
  justifyContent: "center",
  color: "#5B5B5B",
  fontSize: "12px",
  textAlign: "left",
  width: "100%",
  maxWidth: "400px",
  padding: "10px 10px",
  textTransform: "initial"
}

export default function Home() {

  const classes = useStyles()

  return (
    <Grid 
      container 
      spacing={4}
      justifyContent="center"
      alignItems="center"
      padding={2}
    >
      {/* Botões clientes */}
      <Grid 
        container 
        spacing={2}
        justifyContent="center"
        alignItems="center"
        item xs={12} sm={6}
      >
        <Grid item xs={4}>
          <ButtonBase 
            style={buttonStyle}
            onClick={() => {
              window.location = '/AtualClients'
            }}
          >
            <div className={classes.iconDiv}>
              Ver lista <ArrowForwardIosIcon size="small" style={{maxWidth: "10px"}}/>
            </div>
            <div className={classes.clientesText}>
              <div style={{fontWeight: "800"}}>{12.71} mil</div>
              Clientes atuais
            </div>
          </ButtonBase>
        </Grid>
        <Grid item xs={4}>
          <ButtonBase 
            style={buttonStyle}
            onClick={() => {
              window.location = '/PotencialClients'
            }}
          >
            <div className={classes.iconDiv}>
              Ver lista <ArrowForwardIosIcon size="small" style={{maxWidth: "10px"}}/>
            </div>
            <div className={classes.clientesText}>
              <div style={{fontWeight: "800"}}>{12.71} mil</div>
              Clientes potenciais
            </div>
          </ButtonBase>
        </Grid>
        <Grid item xs={4}>
          <ButtonBase disabled={true} style={borderStyle}>
            <div className={classes.clientesText}>
            <div style={{fontWeight: "800"}}>{80} dias</div>
              Sem Comprar
            </div>
          </ButtonBase>
        </Grid>
      </Grid>
      {/* Ações */}
      <Grid container item xs={12} sm={6} spacing={1}>
        <Grid item xs={12}>
          <div style={{fontWeight: "800", fontSize: "16px"}}>
            Ações
          </div>
        </ Grid>
        <Grid item xs={12}>
          <Button 
            style={acoesButtonStyle}
            endIcon={<ArrowForwardIosIcon style={{color: "007CFF"}}/>}
            onClick={() => {
              window.location = '/NewClients'
            }}
          >
            Vender para novos clientes
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button 
            style={acoesButtonStyle} 
            endIcon={<ArrowForwardIosIcon style={{color: "007CFF"}}/>}
            onClick={() => {
              window.location = '/RecoverClients'
            }}
          >
            Recuperar clientes
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button 
            style={acoesButtonStyle} 
            endIcon={<ArrowForwardIosIcon style={{color: "007CFF"}}/>}
            onClick={() => {
              window.location = '/SellToClients'
            }}
          >
            Vender mais para clientes de base
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={6} spacing={1}>
        <Grid item xs={12}>
          <div style={{fontWeight: "800", fontSize: "16px"}}>
            Mapa de clientes e prospects
          </div>
        </ Grid>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Button style={filterButtonStyle}>A partir do filtro</Button>
          </Grid>
          <Grid item xs={6}>
            <Button style={nextButtonStyle}>Próximo a mim</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}