import React from 'react'
import { Box } from '@mui/material'
import Header from "components/Header";
import { useTheme } from '@mui/material';
import theme from 'theme';
import { useGetGeographyQuery } from 'state/api';
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoData } from 'state/geoData';
import Loading from 'components/Loading';



const Geography = () => {
    const theme = useTheme();
    const { data, error, isLoading } = useGetGeographyQuery();
    // console.log("data:", data)
    

  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Geographical-Heatmap" subtitle="Customers Heatmap" />
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '77vh',
                width: '86.5vw',
                mt: '40px',
                ml: '10px',
                backgroundColor: theme.palette.primary[900],
                border: '1px solid',                
                borderColor: theme.palette.primary[400],
                borderRadius: '4px',
                boxShadow: theme.shadows[3],
            }}
        >
          {data ? (

            <ResponsiveChoropleth
                data={data}
                theme={{
                  axis: {
                    domain: {
                      line: {
                        stroke: theme.palette.secondary[200],
                      }
                    },
                    legend: {
                      text: {
                        fill: theme.palette.secondary[200],
                    }
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.secondary[200],
                      strokeWidth: 1,
                    },
                    text: {
                      fill: theme.palette.secondary[200],
                    }
                  },
                },
                legends: {
                  text: {
                    fill: theme.palette.secondary[200],
                  }
                },
                tooltip: {
                  container: {
                    background: theme.palette.primary[200],
                    color: theme.palette.secondary[500],
                  }
                },
                }}
                features={geoData.features}
                margin={{ top: 40, right: 0, bottom: 0, left: 0 }}
                colors="BuPu"
                domain={[ 0, 25 ]}
                unknownColor="#bcb5e3"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={250}
                projectionTranslation={[ 0.5, 0.5 ]}
                projectionRotation={[ 0, 0, 0 ]}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 25,
                        translateY: -62,
                        itemsSpacing: 2,
                        itemWidth: 104,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: theme.palette.secondary[200],
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: theme.palette.secondary[200],
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        )
          : <Loading />}
        </Box>
    </Box>
  )
}

export default Geography