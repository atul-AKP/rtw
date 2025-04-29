import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

// Placeholder SVG for when PDFs aren't loaded yet
const placeholderSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSJ3aGl0ZSIvPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iMTAwIiB4PSI1MCIgeT0iMTAwIiBmaWxsPSIjZjVmNWY1IiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMyMjIiPkNhc2ggV2l0aGRyYXdhbDwvdGV4dD4KICAKICA8IS0tIEZvcm0gZmllbGRzIC0tPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNjAwIiB4PSI1MCIgeT0iMjUwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwhLS0gU2VjdGlvbiAxIC0tPgogIDx0ZXh0IHg9IjcwIiB5PSIyODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyMjIiPlNURVAgT05FPC90ZXh0PgogIDx0ZXh0IHg9IjcwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyMjIiPlBFUlNPTkFMIElORk9STUFUSU9OPC90ZXh0PgogIDxyZWN0IHdpZHRoPSI2NTAiIGhlaWdodD0iMSIgeD0iNzAiIHk9IjMxMCIgZmlsbD0iI2RkZCIvPgogIDx0ZXh0IHg9IjcwIiB5PSIzMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzc3NyI+SWYgeW91IGhhdmUgY29tcGxldGVkIGFsbCByZXF1aXJlZCBmaWVsZHMsIHBsZWFzZSBwcm9jZWVkIHRvIHRoZSBuZXh0IHNlY3Rpb24uPC90ZXh0PgogIAogIDwhLS0gRm9ybSBGaWVsZHMgLS0+CiAgPHRleHQgeD0iNzAiIHk9IjM4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjNDQ0Ij5MYXJzdCBOYW1lPC90ZXh0PgogIDxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAiIHg9IjcwIiB5PSIzOTAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iNzUiIHk9IjQwNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMjIyIj5ET0U8L3RleHQ+CiAgCiAgPHRleHQgeD0iMzAwIiB5PSIzODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzQ0NCI+RmlyYXN0IE5hbWU8L3RleHQ+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMCIgeD0iMzAwIiB5PSIzOTAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iMzA1IiB5PSI0MDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzIyMiI+SkFORTwvdGV4dD4KCiAgPHRleHQgeD0iNzAiIHk9IjQzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjNDQ0Ij5TU048L3RleHQ+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMCIgeD0iNzAiIHk9IjQ0MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZGRkIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8dGV4dCB4PSI3NSIgeT0iNDU1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMyMjIiPjEyMzQ1Njc8L3RleHQ+CgogIDx0ZXh0IHg9IjcwIiB5PSI0ODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzQ0NCI+UGhvbmU8L3RleHQ+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMCIgeD0iNzAiIHk9IjQ5MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZGRkIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8dGV4dCB4PSI3NSIgeT0iNTA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMyMjIiPjk4NzY1NDMyMTA8L3RleHQ+CgogIDwhLS0gQWRkaXRpb25hbCBzZWN0aW9ucyAtLT4KICA8dGV4dCB4PSI3MCIgeT0iNTMwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjIyIj5TVEVQIFRXTzwvdGV4dD4KICA8dGV4dCB4PSI3MCIgeT0iNTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjIyIj5QTEFOIE5JRk9STUFUSU9OPC90ZXh0PgogIDxyZWN0IHdpZHRoPSI2NTAiIGhlaWdodD0iMSIgeD0iNzAiIHk9IjU2MCIgZmlsbD0iI2RkZCIvPgogIDx0ZXh0IHg9IjcwIiB5PSI1ODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzc3NyI+UGxlYXNlIHByb3ZpZGUgZGV0YWlscyBhYm91dCB5b3VyIHJldGlyZW1lbnQgcGxhbi48L3RleHQ+CgogIDx0ZXh0IHg9IjcwIiB5PSI2MjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzQ0NCI+UGxhbiBOYW1lPC90ZXh0PgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAiIHg9IjcwIiB5PSI2MzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iNzUiIHk9IjY0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMjIyIj5BQ01FIENPUlAgNDAxKGspIFBMQU48L3RleHQ+CgogIDwhLS0gSGlnaGxpZ2h0ZWQgYXJlYSAtLT4KICA8dGV4dCB4PSI3MCIgeT0iNjgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiMwMDAiPkRvZXMgdGhlIHBsYW4gYWxsb3cgYSBzcG91c2FsIHdhaXZlciBleGNlcHRpb24gZm9yIGVtcGxveWVlIHBsYW4gYWNjdW11bGF0aW9ucyB1bmRlciAkNTAwMCBvciBmb3IgYWNjdW11bGF0aW9ucyB3aXRoIHRoZSBsYXN0IGNvbnRyaWJ1dGlvbiBkYXRlIHByaW9yIHRvIEF1Z3VzdCAyNHRoIDE5ODQ/PC90ZXh0PgogIDxyZWN0IHdpZHRoPSI0NSIgaGVpZ2h0PSIyMiIgeD0iNzAiIHk9IjY5MCIgZmlsbD0icmdiYSgzMywgMTUwLCAyNDMsIDAuMSkiIHN0cm9rZT0iIzIxOTZmMyIgc3Ryb2tlLXdpZHRoPSIxIiByeD0iMyIgcnk9IjMiLz4KICA8dGV4dCB4PSI5MiIgeT0iNzA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDAwIj5ZZXM8L3RleHQ+Cjwvc3ZnPgo=";

const PdfViewer = ({ pdfUrl, selectedFieldId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pdfExists, setPdfExists] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Check if PDF exists
  useEffect(() => {
    if (!pdfUrl) return;
    
    fetch(pdfUrl)
      .then(response => {
        if (response.ok) {
          setPdfExists(true);
          setIsLoading(false);
        } else {
          console.log(`PDF at ${pdfUrl} not found`);
          setPdfExists(false);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error checking PDF:', error);
        setPdfExists(false);
        setIsLoading(false);
      });
  }, [pdfUrl]);

  const changePage = (offset) => {
    const newPage = pageNumber + offset;
    if (newPage >= 1 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Main PDF Viewer */}
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          bgcolor: '#f0f0f0',
          minHeight: 0, // Important for proper scrolling
        }}
      >
        {isLoading ? (
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              height: '100%',
            }}
          >
            <CircularProgress />
          </Box>
        ) : pdfExists ? (
          <Box 
            sx={{ 
              width: '100%',
              height: '100%',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              bgcolor: 'white'
            }}
          >
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
                height: '100%'
              }}
            >
              <Box 
                component="img"
                src={placeholderSvg}
                sx={{ 
                  width: '100%',
                  height: '70%',
                  objectFit: 'contain',
                }}
                alt="PDF Preview"
              />
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}
              >
                <Typography variant="body1">
                  Click to view PDF
                </Typography>
              </Box>
            </a>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%'
            }}
          >
            <Box 
              component="img"
              src={placeholderSvg}
              sx={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: '80vh'
              }}
              alt="Document Preview"
            />
            <Alert severity="info" sx={{ mt: 2, width: '100%' }}>
              Waiting for PDF to be uploaded to {pdfUrl}
            </Alert>
          </Box>
        )}
      </Box>

      {/* Page Navigation Controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 1,
          borderTop: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <IconButton 
          onClick={() => changePage(-1)} 
          disabled={pageNumber <= 1}
          size="small"
        >
          <Box component="span" className="material-icons">
            navigate_before
          </Box>
        </IconButton>

        <Typography variant="body2">
          Page {pageNumber} of {totalPages}
        </Typography>

        <IconButton 
          onClick={() => changePage(1)} 
          disabled={pageNumber >= totalPages}
          size="small"
        >
          <Box component="span" className="material-icons">
            navigate_next
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
};

export default PdfViewer;