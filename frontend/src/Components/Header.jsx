import { AppBar, Button, ButtonBase, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';


import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ClearIcon from '@mui/icons-material/Clear';

import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import { makeStyles } from "@material-ui/styles"

import logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#007CFF",
    color: "#FFFFFF",
  },
  logo: {
    padding: "31px 0px 10px 10px",
    width: "60px"
  },
  headerDiv: {
    padding: "0px 0px 20px 10px",
  },
  headerStrong: {
    fontSize: "20px"
  },
  headerSmall: {
    fontSize: "15px"
  },
  divFilters: {
    display: "flex",
    justifyContent: "space-between",
  },
  cleanFilters: {
    color: "#808080",
    padding: "10px 0px 0px 10px",
    fontSize: "12px",
    textDecoration: "underline",
  },
  filterButton: {
    padding: "5px 0px 0px 0px",
  },
  filtersDiv: {
    display: "flex",
    overflow: "auto",
    padding: "0px 0px 10px 10px",
    justifyContent: "left",
  },
  filters: {
    padding: "0px 10px 0px 0px",
  },
  tabFiltersDiv: {
    display: "flex",
    overflow: "auto",
    padding: "10px 0px 10px 10px",
    justifyContent: "left",
  },
  tabCleanFilters: {
    color: "#808080",
    padding: "10px 0px 0px 10px",
    fontSize: "12px",
    textDecoration: "underline",
  },
  tabCitiesDiv: {
    padding: "0px 0px 0px 10px"
  },
  tabCitiesStrong: {
    fontWeight: "700",
    fontSize: "16px",
    padding: "0px"
  },
  tabCitiesSmall: {
    fontSize: "11px",
    padding: "0px"
  }
}))

const filtersStyle = {
  borderRadius: 35,
  borderColor: "#808080",
  color: "#808080",
  fontSize: "10px",
  // padding: "0px 2px 0px 8px",
  textTransform: "initial"
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const applyButtonStyle = {
  backgroundColor: "#007CFF",
  color: "#fff",
  border: "1px solid #007CFF",
  justifyContent: "center",
  fontSize: "12px",
  textAlign: "left",
  width: "100%",
  maxWidth: "400px",
  padding: "10px 10px",
  textTransform: "initial"
}

const clearButtonStyle = {
  // backgroundColor: "#ffffff",
  border: "1px solid #007CFF",
  justifyContent: "center",
  color: "#007CFF",
  fontSize: "12px",
  textAlign: "left",
  width: "100%",
  maxWidth: "400px",
  padding: "10px 10px",
  textTransform: "initial"
}

export default function Header() {
  const [array, setArray] = useState(["Curitiba - PR", "Centro"])
  const [tamanhoArray, setTamanhoArray] = useState(array.length)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  useEffect(() => {
    console.log("Filtro atualizado")
  }, [tamanhoArray]);

  const removeArrayElement = (array, index) => {
    array.splice(index, 1)
    return array
  }

  const classes = useStyles()

  const display = () => {
    return (
      <div className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <div className={classes.headerDiv}>
          <div className={classes.headerStrong}><strong>Report de vendas</strong></div>
          <div className={classes.headerSmall}>Consultor(a) Gustavo</div>
        </div>
        <Divider />
      </div>
    )
  };
  
  const Filters = () => {
    return (
      <React.Fragment>
        <div className={classes.divFilters}>
          <div 
            className={classes.cleanFilters} 
            onClick={() => {
              setArray([])
              setTamanhoArray(array.length)
            }}>
            Limpar todos
          </div>
          <div className={classes.filterButton}>
            <Button 
              size="small" 
              variant="text"
              startIcon={<FilterAltOutlinedIcon size="small" />} 
              endIcon={<ArrowForwardIosIcon size="small" />}
            //   onClick={() => {console.log("Filtrar")}}
            // >
            //   <small><Link className={classes.filterRoute} to="/Filters">Filtrar</Link></small>
              onClick={handleClickOpen}
            >
              <small>Filtrar</small>
            </Button>
          </div>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar className={classes.header}>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Filtrar localização
                </Typography>
              </Toolbar>
            </AppBar>
            <div 
              className={classes.tabCleanFilters} 
              onClick={() => {
                setArray([])
                setTamanhoArray(array.length)
            }}>
              Limpar todos
            </div>
            <div className={classes.tabFiltersDiv}>
              {array.map((value, index) => {
                return(
                  <div key={index} className={classes.filters}>
                    <Button 
                      size="small" 
                      variant="outlined"
                      endIcon={<ClearIcon size="small" />}
                      style={filtersStyle}
                      onClick={() => {
                        setArray(removeArrayElement(array, index))
                        setTamanhoArray(array.length)
                      }}
                    >
                      {/* replace space with alt+255 for layout  */}
                      {value.replaceAll(" ", " ")}
                    </Button>
                  </div>
                )
              })}
            </div>
            <Divider />
            <div className={classes.tabCitiesDiv}>
              <p className={classes.tabCitiesStrong}>Cidade</p>
              <p className={classes.tabCitiesSmall}>Cidades já visitadas</p>
            </div>
            <div style={{padding:"10px 10px 30px 10px"}}>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', boxShadow: "none", border: "1px solid #9F9F9F", borderRadius: "3px" }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Digite a cidade que procura"
                  inputProps={{ 'aria-label': 'city-search' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <ButtonBase style={{padding: "5px", color: "#007CFF"}} aria-label="" onClick={() => console.log("cidade procurada")}>
                  <AddCircleRoundedIcon />
                </ButtonBase>
              </Paper>
            </div>
            <Divider />
            <div className={classes.tabCitiesDiv}>
              <p className={classes.tabCitiesStrong}>Bairro</p>
              <p className={classes.tabCitiesSmall}>Filtrando por: Curitiba-PR</p>
            </div>
            <div style={{padding:"10px 10px 30px 10px"}}>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', boxShadow: "none", border: "1px solid #9F9F9F", borderRadius: "3px" }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Digite o bairro que procura"
                  inputProps={{ 'aria-label': 'city-search' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <ButtonBase style={{padding: "5px", color: "#007CFF"}} aria-label="" onClick={() => console.log("cidade procurada")}>
                  <AddCircleRoundedIcon />
                </ButtonBase>
              </Paper>
            </div>
            <Divider />
            <Grid container spacing={1} padding={2}>
              <Grid item xs={6}>
                <Button style={applyButtonStyle}>Aplicar filtros</Button>
              </Grid>
              <Grid item xs={6}>
                <Button style={clearButtonStyle}>Limpar filtros</Button>
              </Grid>
            </Grid>
          </Dialog>
        </div>
        <div className={classes.filtersDiv}>
          {array.map((value, index) => {
            return(
              <div key={index} className={classes.filters}>
                <Button 
                  size="small" 
                  variant="outlined"
                  endIcon={<ClearIcon size="small" />}
                  style={filtersStyle}
                  onClick={() => {
                    setArray(removeArrayElement(array, index))
                    setTamanhoArray(array.length)
                  }}
                >
                  {/* replace space with alt+255 for layout  */}
                  {value.replaceAll(" ", " ")}
                </Button>
              </div>
            )
          })}
        </div>
        <Divider />
      </React.Fragment>
    )
  }
  
  return (
    <React.Fragment>
      <AppBar position="relative">{display()}</AppBar>
      <Filters></Filters>
    </React.Fragment>
  );
}