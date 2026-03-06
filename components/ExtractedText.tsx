'use client'

import { Form, Badge } from 'react-bootstrap'

export default function ExtractedText({
    text,
    onTextChange
}: {
    text: string
    onTextChange: (text: string) => void
}) {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <h6 className="mb-0">Texto do Documento</h6>
                {text && (
                    <Badge bg="secondary">{text.length.toLocaleString()} chars</Badge>
                )}
            </div>
            <Form.Control
                as="textarea"
                rows={12}
                value={text}
                onChange={e => onTextChange(e.target.value)}
                placeholder="Cole aqui o texto extraido do documento..."
                style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}
            />
        </div>
    )
}
