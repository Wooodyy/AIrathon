import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

export function ProfessionalRehab({ formData, setFormData }: any) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">6. Профессиональная реабилитация</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <Label>Удовлетворенность профессиональной ситуацией (0-10)</Label>
          <Slider
            value={[formData.professionalState]}
            onValueChange={(value) => setFormData({ ...formData, professionalState: value[0] })}
            max={10}
            step={1}
          />
          <div className="text-right text-sm text-muted-foreground">
            {formData.professionalState}/10
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Навыки и умения</Label>
          <Textarea
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            placeholder="Опишите ваши профессиональные навыки"
          />
        </div>

        <div className="grid gap-2">
          <Label>Опыт работы и увлечения</Label>
          <Textarea
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            placeholder="Расскажите о вашем опыте работы и хобби"
          />
        </div>
      </CardContent>
    </Card>
  );
}