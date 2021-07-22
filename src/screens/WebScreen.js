import React,{ useEffect} from 'react';
import { WebView } from 'react-native-webview';
import { WebViewHeader } from '../components/WebViewHeader';

export function WebScreen({navigation:{setOptions},route:{params:{url,title}}}) {

  useEffect(()=>{
    setOptions({header:(props)=><WebViewHeader {...props} title={title}/>})
  },[])

  return (
    <WebView 
      source={{ uri: url }}
    />
  );
}