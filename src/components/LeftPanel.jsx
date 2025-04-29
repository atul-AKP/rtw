import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { colors, typography, layout, components } from "../styles/common"

/**
 * LeftPanel - Displays the document preview with navigation controls
 * @param {string} selectedFieldId - Currently selected field ID
 * @param {number} activeTab - Currently active tab index
 */
const LeftPanel = ({ selectedFieldId, activeTab = 0 }) => {
  // Use placeholder SVGs when PDFs aren't loaded yet
  const placeholderSvgs = {
    0: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSJ3aGl0ZSIvPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iMTAwIiB4PSI1MCIgeT0iMTAwIiBmaWxsPSIjZjVmNWY1IiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMyMjIiPkNhc2ggV2l0aGRyYXdhbDwvdGV4dD4KICAKICA8IS0tIEZvcm0gZmllbGRzIC0tPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNjAwIiB4PSI1MCIgeT0iMjUwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwhLS0gU2VjdGlvbiAxIC0tPgogIDx0ZXh0IHg9IjcwIiB5PSIyODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyMjIiPlNURVAgT05FPC90ZXh0PgogIDx0ZXh0IHg9IjcwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyMjIiPlBFUlNPTkFMIElORk9STUFUSU9OPC90ZXh0PgogIDxyZWN0IHdpZHRoPSI2NTAiIGhlaWdodD0iMSIgeD0iNzAiIHk9IjMxMCIgZmlsbD0iI2RkZCIvPgogIDx0ZXh0IHg9IjcwIiB5PSIzMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzc3NyI+SWYgeW91IGhhdmUgY29tcGxldGVkIGFsbCByZXF1aXJlZCBmaWVsZHMsIHBsZWFzZSBwcm9jZWVkIHRvIHRoZSBuZXh0IHNlY3Rpb24uPC90ZXh0PgogIAogIDwhLS0gRm9ybSBGaWVsZHMgLS0+CiAgPHRleHQgeD0iNzAiIHk9IjM4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjNDQ0Ij5MYXJzdCBOYW1lPC90ZXh0PgogIDxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAiIHg9IjcwIiB5PSIzOTAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iNzUiIHk9IjQwNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMjIyIj5ET0U8L3RleHQ+CiAgCiAgPHRleHQgeD0iMzAwIiB5PSIzODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzQ0NCI+RmlyYXN0IE5hbWU8L3RleHQ+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMCIgeD0iMzAwIiB5PSIzOTAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iMzA1IiB5PSI0MDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzIyMiI+SkFORTwvdGV4dD4KCiAgPHRleHQgeD0iNzAiIHk9IjQzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjNDQ0Ij5TU048L3RleHQ+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMCIgeD0iNzAiIHk9IjQ0MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZGRkIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8dGV4dCB4PSI3NSIgeT0iNDU1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMyMjIiPjEyMzQ1Njc8L3RleHQ+CgogIDx0ZXh0IHg9IjcwIiB5PSI0ODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzQ0NCI+UGhvbmU8L3RleHQ+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMCIgeD0iNzAiIHk9IjQ5MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZGRkIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8dGV4dCB4PSI3NSIgeT0iNTA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMyMjIiPjk4NzY1NDMyMTA8L3RleHQ+CgogIDwhLS0gQWRkaXRpb25hbCBzZWN0aW9ucyAtLT4KICA8dGV4dCB4PSI3MCIgeT0iNTMwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjIyIj5TVEVQIFRXTzwvdGV4dD4KICA8dGV4dCB4PSI3MCIgeT0iNTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjIyIj5QTEFOIE5JRk9STUFUSU9OPC90ZXh0PgogIDxyZWN0IHdpZHRoPSI2NTAiIGhlaWdodD0iMSIgeD0iNzAiIHk9IjU2MCIgZmlsbD0iI2RkZCIvPgogIDx0ZXh0IHg9IjcwIiB5PSI1ODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzc3NyI+UGxlYXNlIHByb3ZpZGUgZGV0YWlscyBhYm91dCB5b3VyIHJldGlyZW1lbnQgcGxhbi48L3RleHQ+CgogIDx0ZXh0IHg9IjcwIiB5PSI2MjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzQ0NCI+UGxhbiBOYW1lPC90ZXh0PgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAiIHg9IjcwIiB5PSI2MzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iNzUiIHk9IjY0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMjIyIj5BQ01FIENPUlAgNDAxKGspIFBMQU48L3RleHQ+CgogIDwhLS0gSGlnaGxpZ2h0ZWQgYXJlYSAtLT4KICA8dGV4dCB4PSI3MCIgeT0iNjgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiMwMDAiPkRvZXMgdGhlIHBsYW4gYWxsb3cgYSBzcG91c2FsIHdhaXZlciBleGNlcHRpb24gZm9yIGVtcGxveWVlIHBsYW4gYWNjdW11bGF0aW9ucyB1bmRlciAkNTAwMCBvciBmb3IgYWNjdW11bGF0aW9ucyB3aXRoIHRoZSBsYXN0IGNvbnRyaWJ1dGlvbiBkYXRlIHByaW9yIHRvIEF1Z3VzdCAyNHRoIDE5ODQ/PC90ZXh0PgogIDxyZWN0IHdpZHRoPSI0NSIgaGVpZ2h0PSIyMiIgeD0iNzAiIHk9IjY5MCIgZmlsbD0icmdiYSgzMywgMTUwLCAyNDMsIDAuMSkiIHN0cm9rZT0iIzIxOTZmMyIgc3Ryb2tlLXdpZHRoPSIxIiByeD0iMyIgcnk9IjMiLz4KICA8dGV4dCB4PSI5MiIgeT0iNzA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDAwIj5ZZXM8L3RleHQ+Cjwvc3ZnPgo=",
    1: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSJ3aGl0ZSIvPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iMTAwIiB4PSI1MCIgeT0iMTAwIiBmaWxsPSIjZjVmNWY1IiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMyMjIiPlN1cHBvcnRpbmcgRG9jdW1lbnRzPC90ZXh0PgogIAogIDwhLS0gRm9ybSBmaWVsZHMgLS0+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI2MDAiIHg9IjUwIiB5PSIyNTAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iNzAiIHk9IjI4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzIyMiI+UExBTiBSVUxFUzwvdGV4dD4KICA8dGV4dCB4PSI3MCIgeT0iMzIwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNDQ0Ij5TcG91c2FsIFdhaXZlciBFeGNlcHRpb25zPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iMzUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM0NDQiPlRoZSBwbGFuIGFsbG93cyBzcG91c2FsIHdhaXZlciBleGNlcHRpb24gZm9yIGVtcGxveWVlIHBsYW4gYWNjdW11bGF0aW9ucyB1bmRlciAkNTAwMCBvciBmb3IgYWNjdW11bGF0aW9ucwogIHdpdGggdGhlIGxhc3QgY29udHJpYnV0aW9uIGRhdGUgcHJpb3IgdG8gQXVndXN0IDI0dGggMTk4NC48L3RleHQ+CiAgCiAgPHRleHQgeD0iNzAiIHk9IjQyMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQ0NCI+UURSTyBEZXRhaWxzPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iNDUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM0NDQiPlRoZSBwbGFuIGRvZXMgbm90IG5lZWQgc3BvdXNhbCBjb25zZW50IGlmIGEgUURSTyBpcyBpbiBwbGFjZS4gQWxsIFFEUk8gY29udHJhY3RzCiAgbXVzdCBwcm92aWRlIGV4cGxpY2l0IGFtb3VudCBvciBwZXJjZW50YWdlIGRldGFpbHMuPC90ZXh0PgogIAogIDx0ZXh0IHg9IjcwIiB5PSI1MjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM0NDQiPkJlbmVmaWNpYXJ5IEFwcGxpY2FiaWxpdHk8L3RleHQ+CiAgPHRleHQgeD0iMTAwIiB5PSI1NTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzQ0NCI+QmVuZWZpY2lhcnkgY29udHJhY3RzIGFyZSBub3Qgc3ViamVjdCB0byBzcG91c2FsIGNvbnNlbnQgcmVxdWlyZW1lbnRzLjwvdGV4dD4KPC9zdmc+Cg==",
    2: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSJ3aGl0ZSIvPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iMTAwIiB4PSI1MCIgeT0iMTAwIiBmaWxsPSIjZjVmNWY1IiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMyMjIiPkNvbnRyYWN0PC90ZXh0PgogIAogIDwhLS0gRm9ybSBmaWVsZHMgLS0+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI2MDAiIHg9IjUwIiB5PSIyNTAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iNzAiIHk9IjI4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzIyMiI+Q09OVFJBQ1QgREVUQUlMUzwvdGV4dD4KICA8dGV4dCB4PSI3MCIgeT0iMzIwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNDQ0Ij5Db250cmFjdCBOdW1iZXI6IDEyMzQ1Njc4PC90ZXh0PgogIDx0ZXh0IHg9IjcwIiB5PSIzNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM0NDQiPkNvbnRyYWN0IFR5cGU6IFByaW1hcnkgUGFydGljaXBhbnQ8L3RleHQ+CiAgPHRleHQgeD0iNzAiIHk9IjM4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQ0NCI+QWxsb3dzIEx1bXBzdW06IFllczwvdGV4dD4KICA8dGV4dCB4PSI3MCIgeT0iNDEwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNDQ0Ij5QbGFuIFR5cGU6IDQwMShrKTwvdGV4dD4KICA8cmVjdCB3aWR0aD0iNjUwIiBoZWlnaHQ9IjEiIHg9IjcwIiB5PSI0NTAiIGZpbGw9IiNkZGQiLz4KICA8dGV4dCB4PSI3MCIgeT0iNDgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNDQ0Ij5CYWxhbmNlOiAkMTk4LDUwMC4wMDwvdGV4dD4KICA8dGV4dCB4PSI3MCIgeT0iNTEwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNDQ0Ij5MYXN0IENvbnRyaWJ1dGlvbiBEYXRlOiAwMS8xNS8yMDI1PC90ZXh0PgogIDx0ZXh0IHg9IjcwIiB5PSI1NDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM0NDQiPlJlcXVpcmVzIFNwb3VzYWwgQ29uc2VudDogWWVzPC90ZXh0Pgo8L3N2Zz4K",
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        bgcolor: colors.background.paper,
        p: 2,
      }}
    >
      {/* Parent wrapper with border for the entire preview section */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: colors.background.subtle,
          border: `1px solid ${colors.border.light}`,
          borderRadius: "8px",
        }}
      >
        {/* Preview header - fixed */}
        <Box
          sx={{
            py: 1.5,
            pl: 2,
            pr: 1.5,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ ...typography.header }}>
            Preview
          </Typography>
        </Box>

        {/* Document content area - only this part scrolls */}
        <Box
          sx={{
            flexGrow: 1,
            overflow: "auto",
            px: 2,
            pt: 2,
            pb: 0,
            ...components.scrollbar.thin,
          }}
        >
          {/* Document image */}
          <Box
            component="img"
            src={placeholderSvgs[activeTab]}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              border: `1px solid ${colors.border.light}`,
              borderRadius: layout.borderRadius,
              bgcolor: colors.background.paper,
            }}
            alt="Document Preview"
          />
        </Box>

        {/* Page navigation - fixed at bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            py: 1.5,
            flexShrink: 0,
            bgcolor: colors.background.subtle,
          }}
        >
          <IconButton size="small">
            <NavigateBeforeIcon sx={{ fontSize: "1.1rem" }} />
          </IconButton>
          <Typography variant="body2" sx={{ ...typography.caption }}>
            Page 1 of 17
          </Typography>
          <IconButton size="small">
            <NavigateNextIcon sx={{ fontSize: "1.1rem" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default LeftPanel
