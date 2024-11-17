import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

export function MedicalRehab({ formData, setFormData }: any) {
  return (
    <Card className="form-card p-2">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-semibold">Медицинская реабилитация</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="form-section">
          <Label>Оценка текущего состояния</Label>
          <div className="pt-2 pb-4">
            <Slider
              value={[formData.medicalState]}
              onValueChange={(value) => setFormData({ ...formData, medicalState: value[0] })}
              max={10}
              step={1}
              className="form-slider"
            />
          </div>
          <div className="text-right text-sm text-muted-foreground">
            {formData.medicalState}/10
          </div>
        </div>

        <div className="form-section">
          <Label>Тип ограничения</Label>
          <Input
            value={formData.limitationType}
            onChange={(e) => setFormData({ ...formData, limitationType: e.target.value })}
            placeholder="Например: физическое, сенсорное, когнитивное"
            className="form-input"
          />
        </div>

        <div className="form-section">
          <Label>Причина инвалидности</Label>
          <Input
            value={formData.disabilityCause}
            onChange={(e) => setFormData({ ...formData, disabilityCause: e.target.value })}
            placeholder="Например: травма, врождённое нарушение, заболевание"
            className="form-input"
          />
        </div>

        <div className="form-section">
          <Label>Принимаемые лекарства</Label>
          <Textarea
            value={formData.medications}
            onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
            placeholder="Укажите принимаемые лекарства, если есть"
            className="min-h-[80px] form-input"
          />
        </div>
      </CardContent>
    </Card>
  );
}