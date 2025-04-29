import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const SimplePdfViewer = ({ pdfUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pdfExists, setPdfExists] = useState(false);

  // Placeholder image when PDF is not available
  const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSJ3aGl0ZSIvPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iMTAwIiB4PSI1MCIgeT0iMTAwIiBmaWxsPSIjZjVmNWY1IiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMyMjIiPkNhc2ggV2l0aGRyYXdhbDwvdGV4dD4KICAKICA8IS0tIEZvcm0gZmllbGRzIC0tPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNjAwIiB4PSI1MCIgeT0iMjUwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iNTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODgiPlBERiBQcmV2aWV3PC90ZXh0Pgo8L3N2Zz4K";

  // Check if PDF exists
  useEffect(() => {
    if (!pdfUrl) {
      setIsLoading(false);
      return;
    }
    
    try {
      fetch(pdfUrl)
        .then(response => {
          if (response.ok) {
            setPdfExists(true);
          } else {
            console.log(`PDF at ${pdfUrl} not found`);
            setPdfExists(false);
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error checking PDF:', error);
          setPdfExists(false);
          setIsLoading(false);
        });
    } catch (error) {
      console.error('Error fetching PDF:', error);
      setPdfExists(false);
      setIsLoading(false);
    }
  }, [pdfUrl]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!pdfExists || !pdfUrl) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          p: 2,
        }}
      >
        <Box
          component="img"
          src={placeholderImage}
          sx={{
            height: 'auto',
            maxHeight: '80%',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
          alt="PDF Preview"
        />
        <Alert severity="info" sx={{ mt: 2, width: '100%' }}>
          {pdfUrl ? `PDF at ${pdfUrl} not found.` : 'No PDF specified.'}
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        component="a"
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          height: '100%',
          width: '100%',
          textDecoration: 'none',
          color: 'text.primary',
          bgcolor: 'background.paper',
          borderRadius: 1,
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <Box
          component="img"
          src={placeholderImage}
          sx={{
            height: 'auto',
            maxHeight: '80%',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
          alt="PDF Preview"
        />
        <Typography 
          variant="button" 
          sx={{ 
            mt: 2, 
            bgcolor: 'primary.main', 
            color: 'white', 
            px: 3, 
            py: 1, 
            borderRadius: 1,
            textAlign: 'center'
          }}
        >
          Click to view PDF
        </Typography>
      </Box>
    </Box>
  );
};

export default SimplePdfViewer;