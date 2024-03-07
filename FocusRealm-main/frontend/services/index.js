import { createClient } from '@supabase/supabase-js';
import React from 'react';
export const supabase = createClient(
    'https://lyinojrrjppwhrhsgcau.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5aW5vanJyanBwd2hyaHNnY2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyODg3ODksImV4cCI6MjAwMTg2NDc4OX0.oyZ3z7xuIBdwd89RJy3FCKCCOs2N1Zb31lRa3U3rzuc'
);
