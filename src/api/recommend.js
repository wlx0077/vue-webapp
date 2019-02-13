import axios from './axios'

export const fetchBanner = () => axios.get('/banner')
export const fetchSongList = () => axios.get('/personalized')
export const fetchNewSong = () => axios.get('/personalized/newsong')
export const fetchDjProgram= () => axios.get('/personalized/djprogram')


