import { useEffect } from 'react'

export function useDocumentTitle(title: string, suffix = ' | Portfolio') {
  useEffect(() => {
    const prev = document.title
    document.title = title + suffix
    return () => {
      document.title = prev
    }
  }, [title, suffix])
}
