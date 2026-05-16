export const formatGreeting = (subject: string): string => {
    const trimmed = subject.trim()
    if (trimmed === '') return 'Hello, friend'
    return `Hello from ${trimmed}`
}
